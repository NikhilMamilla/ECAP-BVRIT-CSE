import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';

// Contexts
import StoreContextProvider from './storeContext/StoreContext';
import { VideoProvider } from './contexts/VideoContext';

// Global utilities
import RouteChangeHandler from './components/RouteChangeHandler';
import ScrollToTop from './components/ScrollToTop';

// Core pages
import Home from './components/Home';
import Rector from './components/Rector';
import RedirectPage from './components/RedirectPage';
import AnnouncementsListPage from './components/AnnouncementsListPage';

// Departmental pages
import AIDSDepartmentPage from './components/pages/AIDSDepartmentPage';
import CSEDepartmentPage from './components/pages/CSEDepartmentPage';
import CSDDepartmentPage from './components/pages/CSDDepartmentPage';
import CSMDepartmentPage from './components/pages/CSMDepartmentPage';
import CSBSDepartmentPage from './components/pages/CSBSDepartmentPage';
import ITDepartmentPage from './components/pages/ITDepartmentPage';
import FacultyAll from './components/FacultyAll';
import GraceHopperCOEFull from './components/pages/GraceHopperCOEFull';
import RAndDPage from './components/pages/RAndDPage';

// ECAP shared
import ECAPLogin from './ECAP/ECAPLogin';
import ECAPDashboard from './ECAP/ECAPDashboard';
import ProtectedRoute from './ECAP/ProtectedRoute';
import StudentDashboard from './ECAP/StudentDashboard';
import FacultyDashboard from './ECAP/FacultyDashboard';
import DashboardHome from './ECAP/DashboardHome';

// ECAP student modules
import AcademicCalendar from './ECAP/AcademicCalendar';
import AttendanceReportSubjectWise from './ECAP/AttendanceReportSubjectWise';
import MonthlyAttendance from './ECAP/MonthlyAttendance';
import DaysAbsent from './ECAP/DaysAbsent';
import DaysLate from './ECAP/DaysLate';
import DayWiseAttendance from './ECAP/DayWiseAttendance';
import AcademicRecordsPage from './ECAP/AcademicRecordsPage';
import ResultsPage from './ECAP/ResultsPage';
import HallTicketPage from './ECAP/HallTicketPage';
import NotificationsPage from './ECAP/NotificationsPage';
import TimeTablePage from './ECAP/TimeTablePage';
import StudentAnnouncements from './ECAP/student/StudentAnnouncements';
import StudentEvents from './ECAP/student/StudentEvents';
import StudentExamination from './ECAP/student/StudentExamination';
import StudentFeedback from './ECAP/student/StudentFeedback';
import StudentInternship from './ECAP/student/StudentInternship';
import StudentMarks from './ECAP/student/StudentMarks';
import StudentProfile from './ECAP/student/StudentProfile';
import StudentRegulations from './ECAP/student/StudentRegulations';
import StudentResources from './ECAP/student/StudentResources';
import StudentServices from './ECAP/student/StudentServices';
import StudentTimetable from './ECAP/student/StudentTimetable';

// ECAP faculty modules
import FacultyAttendance from './ECAP/faculty/FacultyAttendance';
import FacultyMarks from './ECAP/faculty/FacultyMarks';
import FacultyTimetable from './ECAP/faculty/FacultyTimetable';
import FacultyResources from './ECAP/faculty/FacultyResources';
import FacultyFeedback from './ECAP/faculty/FacultyFeedback';
import FacultyEvents from './ECAP/faculty/FacultyEvents';
import FacultyProfile from './ECAP/faculty/FacultyProfile';
import FacultyExamination from './ECAP/faculty/FacultyExamination';
import FacultyInternship from './ECAP/faculty/FacultyInternship';
import FacultyRegulations from './ECAP/faculty/FacultyRegulations';
import FacultyAnnouncements from './ECAP/faculty/FacultyAnnouncements';
import FacultyServices from './ECAP/faculty/FacultyServices';

const NotFound: React.FC = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-6">
    <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Page Not Found</h1>
    <p className="text-gray-600 mb-6">
      The page you are looking for might have been moved or no longer exists.
    </p>
    <Link
      to="/"
      className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
    >
      Return to Home
    </Link>
  </div>
);

const App: React.FC = () => {


  return (
    <StoreContextProvider>
      <VideoProvider>
        <Router>
          <RouteChangeHandler />
          <ScrollToTop />

          <Routes>
            {/* Public website */}
            <Route path="/" element={<Home />} />
            <Route path="/announcements" element={<AnnouncementsListPage />} />
            <Route path="/rector" element={<Rector />} />
            <Route path="/redirect" element={<RedirectPage />} />

            {/* Department routes */}
            <Route path="/ai-ds-department" element={<AIDSDepartmentPage />} />
            <Route path="/cse-department" element={<CSEDepartmentPage />} />
            <Route path="/csd-department" element={<CSDDepartmentPage />} />
            <Route path="/csm-department" element={<CSMDepartmentPage />} />
            <Route path="/csbs-department" element={<CSBSDepartmentPage />} />
            <Route path="/it-department" element={<ITDepartmentPage />} />
            <Route path="/cse/faculty" element={<FacultyAll />} />
            <Route path="/cse/grace-hopper" element={<GraceHopperCOEFull />} />
            <Route path="/r-and-d" element={<RAndDPage />} />

            {/* ECAP auth entry points */}
            <Route path="/ecap/login" element={<ECAPLogin />} />
            <Route
              path="/ecap"
              element={
                <ProtectedRoute>
                  <ECAPDashboard />
                </ProtectedRoute>
              }
            />

            {/* ECAP Student Portal */}
            <Route
              path="/ecap/student"
              element={
                <ProtectedRoute>
                  <StudentDashboard />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="academic-calendar" replace />} />
              <Route path="dashboard" element={<DashboardHome />} />
              <Route path="academic-calendar" element={<AcademicCalendar />} />
              <Route path="attendance/subjectwise" element={<AttendanceReportSubjectWise />} />
              <Route path="attendance/monthly" element={<MonthlyAttendance />} />
              <Route path="attendance/daysabsent" element={<DaysAbsent />} />
              <Route path="attendance/dayslate" element={<DaysLate />} />
              <Route path="attendance/daywise" element={<DayWiseAttendance />} />
              <Route path="marks" element={<StudentMarks />} />
              <Route path="timetable" element={<StudentTimetable />} />
              <Route path="resources" element={<StudentResources />} />
              <Route path="feedback" element={<StudentFeedback />} />
              <Route path="events" element={<StudentEvents />} />
              <Route path="profile" element={<StudentProfile />} />
              <Route path="examination" element={<StudentExamination />} />
              <Route path="internship" element={<StudentInternship />} />
              <Route path="regulations" element={<StudentRegulations />} />
              <Route path="announcements" element={<StudentAnnouncements />} />
              <Route path="services" element={<StudentServices />} />
              <Route path="academic-records" element={<AcademicRecordsPage />} />
              <Route path="results" element={<ResultsPage />} />
              <Route path="hall-ticket" element={<HallTicketPage />} />
              <Route path="notifications" element={<NotificationsPage />} />
              <Route path="exam-timetable" element={<TimeTablePage />} />
            </Route>

            {/* ECAP Faculty Portal */}
            <Route
              path="/ecap/faculty"
              element={
                <ProtectedRoute>
                  <FacultyDashboard />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="attendance" replace />} />
              <Route path="attendance" element={<FacultyAttendance />} />
              <Route path="marks" element={<FacultyMarks />} />
              <Route path="timetable" element={<FacultyTimetable />} />
              <Route path="resources" element={<FacultyResources />} />
              <Route path="feedback" element={<FacultyFeedback />} />
              <Route path="events" element={<FacultyEvents />} />
              <Route path="profile" element={<FacultyProfile />} />
              <Route path="examination" element={<FacultyExamination />} />
              <Route path="internship" element={<FacultyInternship />} />
              <Route path="regulations" element={<FacultyRegulations />} />
              <Route path="announcements" element={<FacultyAnnouncements />} />
              <Route path="services" element={<FacultyServices />} />
            </Route>

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </VideoProvider>
    </StoreContextProvider>
  );
};

export default App;

