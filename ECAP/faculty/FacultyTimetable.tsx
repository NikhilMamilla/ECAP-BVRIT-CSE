import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface TimetableItem {
  id: number;
  semester: number;
  section: string;
  day: string;
  timeSlot: string;
  subjectCode: string;
  facultyName: string;
}

const SEMESTERS = [1, 2, 3, 4, 5, 6, 7, 8];

const FacultyTimetable: React.FC = () => {
  const [timetable, setTimetable] = useState<TimetableItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string>("");

  const token = localStorage.getItem("ecap_token");
  const facultyName = localStorage.getItem("ecap_name");
  const facultySubjects = JSON.parse(localStorage.getItem("ecap_subjects") || "[]");

  useEffect(() => {
    if (!facultyName || !selectedSemester || !selectedSubject) {
      console.log("Missing required data:", { facultyName, selectedSemester, selectedSubject });
      setTimetable([]);
      return;
    }

    console.log("Fetching timetable for:", { facultyName, selectedSemester, selectedSubject });
    setLoading(true);
    axios
      .get<TimetableItem[]>(`http://localhost:8080/timetable/faculty/${facultyName}`,
       {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("Raw API response:", res.data);
        const filteredTimetable = res.data.filter(item => {
          const matches = item.semester === selectedSemester && item.subjectCode === selectedSubject;
          console.log(`Checking item: ${item.day} ${item.timeSlot} - semester: ${item.semester}, subject: ${item.subjectCode}, matches: ${matches}`);
          return matches;
        });
        console.log("Filtered timetable:", filteredTimetable);
        setTimetable(filteredTimetable);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Timetable Load Error:", err);
        setTimetable([]);
        setLoading(false);
      });
  }, [selectedSemester, selectedSubject, facultyName, token]);

  const getSections = () => {
    const sections = [...new Set(timetable.map(item => item.section))];
    return sections.sort();
  }

  const getTimeSlots = () => {
    return [...new Set(timetable.map(item => item.timeSlot))].sort();
  }

  const getTimetableCell = (timeSlot: string, section: string) => {
    const item = timetable.find(t => t.timeSlot === timeSlot && t.section === section);
    return item ? `${item.subjectCode}` : '-';
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Faculty Timetable</h2>

      <div className="mb-4">
        <label htmlFor="semester-select" className="mr-2 font-bold">Select Semester:</label>
        <select 
          id="semester-select"
          value={selectedSemester || ""} 
          onChange={(e) => setSelectedSemester(Number(e.target.value))}
          className="p-2 border rounded"
        >
          <option value="">Select Semester</option>
          {SEMESTERS.map(sem => (
            <option key={sem} value={sem}>{sem}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="subject-select" className="mr-2 font-bold">Select Subject:</label>
        <select 
          id="subject-select"
          value={selectedSubject} 
          onChange={(e) => setSelectedSubject(e.target.value)}
          disabled={!selectedSemester}
          className={`p-2 border rounded ${!selectedSemester ? 'bg-gray-100 cursor-not-allowed' : ''}`}
        >
          <option value="">{selectedSemester ? "Select Subject" : "Select Semester First"}</option>
          {facultySubjects.map((subject: string) => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <div>Loading timetable...</div>
      ) : !selectedSemester || !selectedSubject ? (
        <div className="text-gray-500 text-center py-8">Please select both semester and subject to view timetable</div>
      ) : timetable.length === 0 ? (
        <div className="text-gray-500 text-center py-8">No timetable data found for selected semester and subject</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-blue-600 text-white text-center text-xs">
              <tr>
                <th className="px-2 py-2 border">Time</th>
                {getSections().map(section => (
                  <th key={section} className="px-2 py-2 border">
                    Section {section}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {getTimeSlots().map(timeSlot => (
                <tr key={timeSlot} className="text-center text-xs border">
                  <td className="px-2 py-2 font-semibold border bg-gray-50">{timeSlot}</td>
                  {getSections().map(section => (
                    <td key={section} className="px-2 py-2 border whitespace-pre-line">
                      {getTimetableCell(timeSlot, section)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FacultyTimetable;
