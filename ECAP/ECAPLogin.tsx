import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ECAPLogin: React.FC = () => {
  const navigate = useNavigate();

  // Employee Login State
  const [empUserName, setEmpUserName] = useState('');
  const [empPassword, setEmpPassword] = useState('');

  // Student Login State
  const [studentUserName, setStudentUserName] = useState('');
  const [studentPassword, setStudentPassword] = useState('');

  // Parent Login State
  const [parentRollNo, setParentRollNo] = useState('');
  const [parentMobileNo, setParentMobileNo] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  // Handle Enter key press
  const handleEmpKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEmployeeLogin(e as any);
    }
  };

  const handleStudentKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleStudentLogin(e as any);
    }
  };

  const handleEmployeeLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (empUserName && empPassword) {
        const response = await fetch('http://localhost:8080/api/auth/login/faculty', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: empUserName, password: empPassword }),
        });

        if (response.ok) {
          const data = await response.json();

          // Store authentication info
          localStorage.setItem('ecap_token', data.token);
          localStorage.setItem('ecap_userType', data.userType);
          localStorage.setItem('ecap_userName', data.name);
          localStorage.setItem('ecap_subjects', JSON.stringify(data.subjects || []));

          localStorage.setItem(
            "faculty",
            JSON.stringify({ facultyId: data.facultyId, facultyName: data.name, subjects: data.subjects })
          );

          navigate('/ecap');
        } else {
          alert('Invalid credentials. Please try again.');
        }
      }
    } catch (err) {
      console.error('Login failed:', err);
    } finally {
      setIsLoading(false);
    }
  };


  const handleStudentLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));


      if (studentUserName && studentPassword) {
        const response = await fetch('http://localhost:8080/api/auth/login/student', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: studentUserName, password: studentPassword }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Login response from server:', data);
          localStorage.setItem('ecap_token', data.token);
          localStorage.setItem('ecap_userType', data.userType);
          localStorage.setItem('ecap_rollNumber', data.rollNumber);
          localStorage.setItem('ecap_userName', data.name);
          localStorage.setItem("ecap_semester", data.semester);
          localStorage.setItem("ecap_section", data.section);
          const userObj = {
            rollNumber: data.rollNumber,
            name: data.name,
            semester: data.semester,
            section: data.section
          };
          localStorage.setItem("user", JSON.stringify(userObj));
          console.log("Saved user object to localStorage:", userObj);
          navigate("/ecap");
        } else {
          alert('Invalid credentials. Please try again.');
        }
      }
    } catch (err) {
      console.error('Login failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleParentLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));


      if (parentRollNo && parentMobileNo) {
        const response = await fetch('http://localhost:8080/api/auth/login/parent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ rollNumber: parentRollNo, mobileNumber: parentMobileNo }),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('ecap_token', data.token);
          localStorage.setItem('ecap_userType', data.userType);
          localStorage.setItem('ecap_rollNumber', data.rollNumber);
          localStorage.setItem('ecap_userName', data.name);
          navigate('/ecap');
        } else {
          alert('Invalid credentials. Please try again.');
        }
      }
    } catch (err) {
      console.error('Login failed:', err);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div style={{ backgroundColor: '#FFFFFF', margin: 0, padding: '30px 0' }}>
      <center>
        <table border={0} cellPadding={0} cellSpacing={0} style={{ width: '1000px', margin: '0 auto' }}>
          {/* Header Image */}
          <tr>
            <td>
              <img
                alt="Header"
                height={100}
                src="/collegeimages/title_head.jpg"
                width={1000}
                style={{ display: 'block' }}
              />
            </td>
          </tr>

          {/* Body Banner Image */}
          <tr>
            <td>
              <img
                alt="Banner"
                height={143}
                src="/collegeimages/body.jpg"
                width={1000}
                style={{ display: 'block' }}
              />
            </td>
          </tr>

          {/* Line Separator */}
          <tr>
            <td style={{ backgroundImage: 'url(/CollegeImages/line.gif)', height: '10px' }}>
            </td>
          </tr>

          {/* Login Panels */}
          <tr>
            <td align="center" style={{ backgroundColor: '#F5F5F5', padding: '20px 0 10px 0' }}>
              <table style={{ borderCollapse: 'collapse' }}>
                <tr>
                  {/* Employee Login Panel */}
                  <td style={{ verticalAlign: 'top', paddingTop: '5px' }}>
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      style={{
                        backgroundColor: 'White',
                        width: '263px',
                        height: '256px',
                        borderCollapse: 'collapse',
                        borderSpacing: 0
                      }}
                    >
                      <tr>
                        <td width="27" style={{ padding: 0, margin: 0, lineHeight: 0 }}>
                          <span id="lblError" style={{ color: '#FC3A00', fontSize: '11px', fontWeight: 'bold' }}>
                          </span>
                        </td>
                        <td colSpan={2} style={{ padding: 0, margin: 0 }}></td>
                        <td width="53" style={{ padding: 0, margin: 0 }}></td>
                      </tr>
                      <tr>
                        <td style={{ padding: '10px 0 0 0', margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={83} src="/collegeimages/login_01.gif" width={27} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td width={117} style={{ padding: '10px 0 0 0', margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={83} src="/collegeimages/login_02.gif" width={117} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td width={66} style={{ padding: '10px 0 0 0', margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={83} src="/collegeimages/login_03.gif" width={66} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td style={{ padding: '10px 0 0 0', margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={83} src="/collegeimages/login_04.gif" width={24} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ backgroundImage: 'url(/collegeimages/login_10.gif)', backgroundRepeat: 'no-repeat', height: '82px', padding: 0, margin: 0, lineHeight: 0 }}>
                        </td>
                        <td colSpan={2} style={{ backgroundImage: 'url(/collegeimages/login_11.gif)', backgroundRepeat: 'no-repeat', padding: 0, margin: 0 }}>
                          <form onSubmit={handleEmployeeLogin} autoComplete="off">
                            <table border={0} cellPadding={1} cellSpacing={1} style={{ width: '100%' }}>
                              <tr>
                                <td width="5%"></td>
                                <td style={{ whiteSpace: 'nowrap' }} width="41%">
                                  <span style={{ fontFamily: 'Geneva, Arial, Helvetica, sans-serif', fontSize: '11px', fontWeight: 'bold', color: '#FC3A00' }}>
                                    User Name
                                  </span>
                                </td>
                                <td style={{ fontFamily: 'Geneva, Arial, Helvetica, sans-serif', fontSize: '11px', fontWeight: 'bold', color: '#4E7CC9' }} width="1%">
                                  :
                                </td>
                                <td>
                                  <input
                                    className="input_loginBlue"
                                    id="txtId1"
                                    type="text"
                                    value={empUserName}
                                    onChange={(e) => setEmpUserName(e.target.value)}
                                    autoComplete="off"
                                    style={{
                                      fontSize: '10px',
                                      color: '#0033CC',
                                      fontFamily: 'Verdana, Geneva, Arial, Helvetica, sans-serif',
                                      height: '16px',
                                      border: '1px solid #CCCCCC',
                                      width: '100%',
                                      padding: '2px'
                                    }}
                                  />
                                </td>
                                <td width="3%"></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td style={{ whiteSpace: 'nowrap' }}>
                                  <span style={{ fontFamily: 'Geneva, Arial, Helvetica, sans-serif', fontSize: '11px', fontWeight: 'bold', color: '#FC3A00' }}>
                                    Password
                                  </span>
                                </td>
                                <td style={{ fontFamily: 'Geneva, Arial, Helvetica, sans-serif', fontSize: '11px', fontWeight: 'bold', color: '#4E7CC9' }}>
                                  :
                                </td>
                                <td>
                                  <input
                                    className="input_loginBlue"
                                    id="txtPwd1"
                                    type="password"
                                    value={empPassword}
                                    onChange={(e) => setEmpPassword(e.target.value)}
                                    onKeyPress={handleEmpKeyPress}
                                    autoComplete="new-password"
                                    style={{
                                      fontSize: '10px',
                                      color: '#0033CC',
                                      fontFamily: 'Verdana, Geneva, Arial, Helvetica, sans-serif',
                                      height: '16px',
                                      border: '1px solid #CCCCCC',
                                      width: '100%',
                                      padding: '2px'
                                    }}
                                  />
                                </td>
                                <td></td>
                              </tr>
                            </table>
                          </form>
                        </td>
                        <td style={{ backgroundImage: 'url(/collegeimages/login_13.gif)', backgroundRepeat: 'no-repeat', padding: 0, margin: 0, lineHeight: 0 }}>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={29} src="/collegeimages/login_18.gif" width={27} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={29} src="/collegeimages/login_19.gif" width={117} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <button
                            type="submit"
                            onClick={handleEmployeeLogin}
                            disabled={isLoading}
                            style={{
                              border: 'none',
                              background: 'transparent',
                              padding: 0,
                              margin: 0,
                              cursor: isLoading ? 'not-allowed' : 'pointer',
                              lineHeight: 0
                            }}
                          >
                            <img
                              alt="Login"
                              height={29}
                              src="/collegeimages/login_20.jpeg"
                              width={66}
                              style={{ display: 'block', padding: 0, margin: 0 }}
                            />
                          </button>
                        </td>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={29} src="/collegeimages/login_21.gif" width={24} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={62} src="/collegeimages/login_26.gif" width={27} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={62} src="/collegeimages/login_27.gif" width={117} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={62} src="/collegeimages/login_28.gif" width={66} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={62} src="/collegeimages/login_29.gif" width={24} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                      </tr>
                    </table>
                  </td>

                  {/* Student Login Panel */}
                  <td style={{ verticalAlign: 'top', paddingTop: '5px' }}>
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      style={{
                        backgroundColor: 'White',
                        width: '263px',
                        height: '256px',
                        borderCollapse: 'collapse',
                        borderSpacing: 0
                      }}
                    >
                      <tr>
                        <td width="36" style={{ padding: 0, margin: 0, lineHeight: 0 }}>
                          <span id="lblError1" style={{ color: '#B41400', fontSize: '11px', fontWeight: 'bold' }}>
                          </span>
                        </td>
                        <td colSpan={2} style={{ padding: 0, margin: 0 }}></td>
                        <td width="43" style={{ padding: 0, margin: 0 }}></td>
                      </tr>
                      <tr>
                        <td style={{ padding: '10px 0 0 0', margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={83} src="/collegeimages/login_06.gif" width={36} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td width={117} style={{ padding: '10px 0 0 0', margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={83} src="/collegeimages/login_07.gif" width={117} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td width={67} style={{ padding: '10px 0 0 0', margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={83} src="/collegeimages/login_08.gif" width={67} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td style={{ padding: '10px 0 0 0', margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={83} src="/collegeimages/login_09.gif" width={21} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ backgroundImage: 'url(/collegeimages/login_14.gif)', backgroundRepeat: 'no-repeat', padding: 0, margin: 0, lineHeight: 0 }}>
                        </td>
                        <td colSpan={2} style={{ backgroundImage: 'url(/collegeimages/login_15.gif)', backgroundRepeat: 'no-repeat', padding: 0, margin: 0 }}>
                          <form onSubmit={handleStudentLogin} autoComplete="off">
                            <table border={0} cellPadding={1} cellSpacing={1} style={{ width: '100%' }}>
                              <tr>
                                <td width="6%"></td>
                                <td style={{ whiteSpace: 'nowrap' }} width="43%">
                                  <span style={{ fontFamily: 'Geneva, Arial, Helvetica, sans-serif', fontSize: '11px', fontWeight: 'bold', color: '#B41400' }}>
                                    User Name
                                  </span>
                                </td>
                                <td style={{ fontFamily: 'Geneva, Arial, Helvetica, sans-serif', fontSize: '11px', fontWeight: 'bold', color: '#4E7CC9' }} width="1%">
                                  :
                                </td>
                                <td width="48%">
                                  <input
                                    className="input_loginBlue"
                                    id="txtId2"
                                    type="text"
                                    value={studentUserName}
                                    onChange={(e) => setStudentUserName(e.target.value)}
                                    autoComplete="off"
                                    style={{
                                      fontSize: '10px',
                                      color: '#0033CC',
                                      fontFamily: 'Verdana, Geneva, Arial, Helvetica, sans-serif',
                                      height: '16px',
                                      border: '1px solid #CCCCCC',
                                      width: '100%',
                                      padding: '2px'
                                    }}
                                  />
                                </td>
                                <td width="3%"></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td style={{ whiteSpace: 'nowrap' }}>
                                  <span style={{ fontFamily: 'Geneva, Arial, Helvetica, sans-serif', fontSize: '11px', fontWeight: 'bold', color: '#B41400' }}>
                                    Password:
                                  </span>
                                </td>
                                <td style={{ fontFamily: 'Geneva, Arial, Helvetica, sans-serif', fontSize: '11px', fontWeight: 'bold', color: '#4E7CC9' }}>
                                  :
                                </td>
                                <td>
                                  <input
                                    className="input_loginBlue"
                                    id="txtPwd2"
                                    type="password"
                                    value={studentPassword}
                                    onChange={(e) => setStudentPassword(e.target.value)}
                                    onKeyPress={handleStudentKeyPress}
                                    autoComplete="new-password"
                                    style={{
                                      fontSize: '10px',
                                      color: '#0033CC',
                                      fontFamily: 'Verdana, Geneva, Arial, Helvetica, sans-serif',
                                      height: '16px',
                                      border: '1px solid #CCCCCC',
                                      width: '100%',
                                      padding: '2px'
                                    }}
                                  />
                                </td>
                                <td></td>
                              </tr>
                            </table>
                          </form>
                        </td>
                        <td style={{ backgroundImage: 'url(/collegeimages/login_17.gif)', backgroundRepeat: 'no-repeat', height: '82px', padding: 0, margin: 0, lineHeight: 0 }}>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={29} src="/collegeimages/login_22.gif" width={36} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={29} src="/collegeimages/login_23.gif" width={117} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <button
                            type="submit"
                            onClick={handleStudentLogin}
                            disabled={isLoading}
                            style={{
                              border: 'none',
                              background: 'transparent',
                              padding: 0,
                              margin: 0,
                              cursor: isLoading ? 'not-allowed' : 'pointer',
                              lineHeight: 0
                            }}
                          >
                            <img
                              alt="Login"
                              height={29}
                              src="/collegeimages/login_24.gif"
                              width={67}
                              style={{ display: 'block', padding: 0, margin: 0 }}
                            />
                          </button>
                        </td>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={29} src="/collegeimages/login_25.gif" width={21} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={62} src="/collegeimages/login_30.gif" width={36} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={62} src="/collegeimages/login_31.gif" width={117} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={62} src="/collegeimages/login_32.gif" width={67} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={62} src="/collegeimages/login_33.gif" width={21} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                      </tr>
                    </table>
                  </td>

                  {/* Parent Login Panel */}
                  <td style={{ verticalAlign: 'top', paddingTop: '5px' }}>
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      style={{
                        backgroundColor: 'White',
                        width: '263px',
                        height: '256px',
                        borderCollapse: 'collapse',
                        borderSpacing: 0
                      }}
                    >
                      <tr>
                        <td width="27" style={{ padding: 0, margin: 0, lineHeight: 0 }}>
                          <span id="lblError2" style={{ color: '#B41400', fontSize: '11px', fontWeight: 'bold' }}>
                          </span>
                        </td>
                        <td colSpan={2} style={{ padding: 0, margin: 0 }}></td>
                        <td width="53" style={{ padding: 0, margin: 0 }}></td>
                      </tr>
                      <tr>
                        <td style={{ padding: '10px 0 0 0', margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={83} src="/collegeimages1/login_01.gif" width={27} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td width={117} style={{ padding: '10px 0 0 0', margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={83} src="/collegeimages1/login_02.gif" width={117} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td width={66} style={{ padding: '10px 0 0 0', margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={83} src="/collegeimages1/login_03.gif" width={66} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td style={{ padding: '10px 0 0 0', margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={83} src="/collegeimages1/login_04.gif" width={24} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ backgroundImage: 'url(/collegeimages1/login_10.gif)', backgroundRepeat: 'no-repeat', height: '82px', padding: 0, margin: 0, lineHeight: 0 }}>
                        </td>
                        <td colSpan={2} style={{ backgroundImage: 'url(/collegeimages1/login_11.gif)', backgroundRepeat: 'no-repeat', padding: 0, margin: 0 }}>
                          <form onSubmit={handleParentLogin} autoComplete="off">
                            <table border={0} cellPadding={1} cellSpacing={1} style={{ width: '100%' }}>
                              <tr>
                                <td width="5%"></td>
                                <td style={{ whiteSpace: 'nowrap' }} width="41%">
                                  <span style={{ fontFamily: 'Geneva, Arial, Helvetica, sans-serif', fontSize: '11px', fontWeight: 'bold', color: '#FC3A00' }}>
                                    Roll.No
                                  </span>
                                </td>
                                <td style={{ fontFamily: 'Geneva, Arial, Helvetica, sans-serif', fontSize: '11px', fontWeight: 'bold', color: '#4E7CC9' }} width="1%">
                                  :
                                </td>
                                <td>
                                  <input
                                    className="input_loginBlue"
                                    id="txtId3"
                                    type="text"
                                    value={parentRollNo}
                                    onChange={(e) => setParentRollNo(e.target.value)}
                                    autoComplete="off"
                                    style={{
                                      fontSize: '10px',
                                      color: '#0033CC',
                                      fontFamily: 'Verdana, Geneva, Arial, Helvetica, sans-serif',
                                      height: '16px',
                                      border: '1px solid #CCCCCC',
                                      width: '100%',
                                      padding: '2px'
                                    }}
                                  />
                                </td>
                                <td width="3%"></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td style={{ whiteSpace: 'nowrap' }}>
                                  <span style={{ fontFamily: 'Geneva, Arial, Helvetica, sans-serif', fontSize: '11px', fontWeight: 'bold', color: '#FC3A00' }}>
                                    Mobile No
                                  </span>
                                </td>
                                <td style={{ fontFamily: 'Geneva, Arial, Helvetica, sans-serif', fontSize: '11px', fontWeight: 'bold', color: '#4E7CC9' }}>
                                  :
                                </td>
                                <td>
                                  <input
                                    className="input_loginBlue"
                                    id="txtPwd3"
                                    type="password"
                                    value={parentMobileNo}
                                    onChange={(e) => setParentMobileNo(e.target.value)}
                                    autoComplete="new-password"
                                    style={{
                                      fontSize: '10px',
                                      color: '#0033CC',
                                      fontFamily: 'Verdana, Geneva, Arial, Helvetica, sans-serif',
                                      height: '16px',
                                      border: '1px solid #CCCCCC',
                                      width: '100%',
                                      padding: '2px'
                                    }}
                                  />
                                </td>
                                <td></td>
                              </tr>
                            </table>
                          </form>
                        </td>
                        <td style={{ backgroundImage: 'url(/collegeimages1/login_13.gif)', backgroundRepeat: 'no-repeat', padding: 0, margin: 0, lineHeight: 0 }}>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={29} src="/collegeimages1/login_18.gif" width={27} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={29} src="/collegeimages1/login_19.gif" width={117} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <button
                            type="submit"
                            onClick={handleParentLogin}
                            disabled={isLoading}
                            style={{
                              border: 'none',
                              background: 'transparent',
                              padding: 0,
                              margin: 0,
                              cursor: isLoading ? 'not-allowed' : 'pointer',
                              lineHeight: 0
                            }}
                          >
                            <img
                              alt="Login"
                              height={29}
                              src="/collegeimages1/login_20.gif"
                              width={66}
                              style={{ display: 'block', padding: 0, margin: 0 }}
                            />
                          </button>
                        </td>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={29} src="/collegeimages1/login_21.gif" width={24} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={62} src="/collegeimages1/login_26.gif" width={27} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={62} src="/collegeimages1/login_27.gif" width={117} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={62} src="/collegeimages1/login_28.gif" width={66} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                        <td style={{ padding: 0, margin: 0, lineHeight: 0, verticalAlign: 'top' }}>
                          <img alt="" height={62} src="/collegeimages1/login_29.gif" width={24} style={{ display: 'block', padding: 0, margin: 0 }} />
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          {/* Bottom Background */}
          <tr>
            <td style={{ paddingTop: '20px' }}>
              <img alt="" src="/collegeimages/bott_bg.gif" width={1000} style={{ display: 'block' }} />
            </td>
          </tr>
        </table>
      </center>
    </div>
  );
};

export default ECAPLogin;


