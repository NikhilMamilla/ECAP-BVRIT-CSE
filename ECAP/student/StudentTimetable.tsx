import React, { useEffect, useState } from "react";
import axios from "axios";

interface TimetableItem {
  id: number;
  semester: number;
  section: string;
  day: string;
  timeSlot: string;
  subjectCode: string;
  facultyName: string;
}

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const StudentTimetable: React.FC = () => {
  const [timetable, setTimetable] = useState<TimetableItem[]>([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("ecap_token");
  const semester = localStorage.getItem("ecap_semester");
  const section = localStorage.getItem("ecap_section");

  useEffect(() => {
    if (!semester) return;

    axios
      .get<TimetableItem[]>(`http://localhost:8080/timetable/${semester}/${section}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setTimetable(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Timetable Load Error:", err);
        setLoading(false);
      });
  }, [semester, section]);

  if (loading) return <div>Loading timetable...</div>;

  const groupedByTime: Record<string, Record<string, TimetableItem>> = {};

  timetable.forEach((item) => {
    if (!groupedByTime[item.timeSlot]) {
      groupedByTime[item.timeSlot] = {};
    }
    groupedByTime[item.timeSlot][item.day] = item;
  });

  const timeSlots = Object.keys(groupedByTime);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Timetable - {semester}th Semester - Section {section}</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-blue-600 text-white text-center text-xs">
            <tr>
              <th className="px-2 py-2 border">Time</th>
              {DAYS.map((day) => (
                <th key={day} className="px-2 py-2 border">
                  {day}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {timeSlots.map((slot) => (
              <tr key={slot} className="text-center text-xs border">
                <td className="px-2 py-2 font-semibold border bg-gray-50">
                  {slot}
                </td>

                {DAYS.map((day) => {
                  const item = groupedByTime[slot][day];
                  return (
                    <td key={day} className="px-2 py-2 border">
                      {item ? (
                        <>
                          <div className="font-semibold text-[11px]">{item.subjectCode}</div>
                          <div className="text-[10px] text-gray-700">{item.facultyName}</div>
                        </>
                      ) : (
                        <span className="text-[10px]">-</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTimetable;

