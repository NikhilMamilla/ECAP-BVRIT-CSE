# ECAP Mock Credentials for Testing

## Faculty/Employee Login

Use the **Employee Login** panel (purple/blue panel on the left).

| Username | Password | Description |
|----------|----------|-------------|
| `faculty` | `faculty123` | Main faculty account |
| `prof.smith` | `prof123` | Professor account |
| `teacher` | `teacher123` | Teacher account |

**Note:** You can also use any username/password combination for testing (the system will accept it if it's not in the mock list).

---

## Student Login

Use the **Student Login** panel (orange/red panel in the middle).

| Username (Roll Number) | Password | Description |
|------------------------|----------|-------------|
| `23211A05M7` | `student123` | Main student account |
| `student` | `student123` | Generic student account |
| `2024cse001` | `student123` | CSE student account |

**Note:** You can also use any username/password combination for testing.

---

## Parent Login

Use the **Parent Login** panel (blue panel on the right).

| Roll Number | Mobile Number | Description |
|-------------|---------------|-------------|
| `23211A05M7` | `9876543210` | Parent of student 23211A05M7 |
| `parent` | `1234567890` | Generic parent account |
| `2024cse001` | `9876543210` | Parent of CSE student |

**Note:** You can also use any roll number/mobile combination for testing.

---

## Quick Test Guide

### To Test Faculty Dashboard:
1. Go to `/ecap/login`
2. Click on **Employee Login** panel (left side, purple)
3. Enter: `faculty` / `faculty123`
4. You'll be redirected to Faculty Dashboard with all 12 modules

### To Test Student Dashboard:
1. Go to `/ecap/login`
2. Click on **Student Login** panel (middle, orange)
3. Enter: `23211A05M7` / `student123`
4. You'll be redirected to Student Dashboard with Academic Calendar and Attendance options

### To Test Parent Dashboard:
1. Go to `/ecap/login`
2. Click on **Parent Login** panel (right side, blue)
3. Enter: Roll No: `23211A05M7`, Mobile: `9876543210`
4. You'll be redirected to Student Dashboard (same as student, as requested)

---

## Features by User Type

### Faculty/Employee Can:
- Update/View all student attendance
- Update/View marks and grades
- Create/Edit timetables
- Upload/Edit course resources (PDFs)
- View feedback summary and respond
- Create/Manage events
- View/Edit own profile
- Update examination marks/info
- Review/Approve/Track internships and projects
- View/Edit limited regulations
- Post own announcements
- Approve/Manage miscellaneous services

### Student/Parent Can:
- View own attendance (Subject Wise, Monthly, Days Absent, Days Late, Day Wise)
- View Academic Calendar
- View own marks and grades (when implemented)
- View timetables (when implemented)
- View/Download/Search resources (when implemented)
- Submit/View feedback status (when implemented)
- Register/View events status (when implemented)
- View/Edit own profile (when implemented)
- View/Upload/Apply for examinations (when implemented)
- Apply/Upload/Track internships (when implemented)
- View regulations (when implemented)
- View all announcements (when implemented)
- Apply/View miscellaneous services status (when implemented)

---

## Notes

- All credentials are case-sensitive
- The system uses localStorage for session management
- Logout clears all stored credentials
- Faculty and Student/Parent have completely different dashboards
- Student and Parent share the same dashboard (as per requirements)

