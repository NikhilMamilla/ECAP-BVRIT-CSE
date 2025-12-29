import React, { useState, useEffect } from 'react';
import Header from '../Header';
import { FaQuoteLeft } from "react-icons/fa";
import Footer from '../Footer';
import { FaBriefcase, FaHandshake, FaTrophy, FaUsers, FaChartLine, FaGraduationCap, FaBuilding, FaRocket, FaAward } from 'react-icons/fa';

const Placements = () => {
  const [currentInternship, setCurrentInternship] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 15;

  // Real 2024 Batch Placement Data - BVRIT CSE Department
  const placementData2024 = [
    { sno: 1, rno: '20211A0501', name: 'A PRAGATHI', offers: 'ACCENTUREHACK-DIVA & CAPGEMINI-SOFTWARE-ENGINEER' },
    { sno: 2, rno: '20211A0506', name: 'ABRABOINA RISHIKESH', offers: 'VERIZON & RENAULT NISSAN' },
    { sno: 3, rno: '20211A0508', name: 'ADHUGIRI.SRI CHANDANA', offers: 'BANK OF AMERICA & KPIT' },
    { sno: 4, rno: '20211A0514', name: 'ALLURI SUPRIYA REDDY', offers: 'ACMEGRADE' },
    { sno: 5, rno: '20211A0517', name: 'ANNAVAJJULA SOMITH', offers: 'TECH MAHINDRA & REALPAGE' },
    { sno: 6, rno: '20211A0519', name: 'ANUMANDLA SANNITH REDDY', offers: 'ACCENTURE-ASE & VERIZON & DARWINBOX-TECHNICAL ANALYST INTERN' },
    { sno: 7, rno: '20211A0520', name: 'ARE SONIA', offers: 'BANK OF AMERICA' },
    { sno: 8, rno: '20211A0521', name: 'ARKA PRABHA CHOWDHURY', offers: 'ACCENTURE-ASE & RTCAMP OFFCAMPUS' },
    { sno: 9, rno: '20211A0522', name: 'ARRA PRAGATHI', offers: 'ACCENTURE-ASE' },
    { sno: 10, rno: '20211A0524', name: 'ASIFA NAZNEEN', offers: 'CAPGEMINI-SOFTWARE-ENGINEER' },
    { sno: 11, rno: '20211A0526', name: 'BAIRI TEJASHWINI', offers: 'KPIT' },
    { sno: 12, rno: '20211A0527', name: 'TARUN KUMAR BALERAO', offers: 'TECH MAHINDRA & TCS-DIGITAL' },
    { sno: 13, rno: '20211A0530', name: 'BANDEWALE', offers: 'BYTES OF INDIA-PHASE 1' },
    { sno: 14, rno: '20211A0531', name: 'BATCHU KANAKA DURGA PRIYANKA', offers: 'BANK OF AMERICA & STATE STREET' },
    { sno: 15, rno: '20211A0532', name: 'BEGARI PRISKILLA', offers: 'ACCENTURE-ASE' },
    { sno: 16, rno: '20211A0537', name: 'BOGA GAGAN CHANDRA', offers: 'TEJAS NETWORKS & ACCENTURE-ASE' },
    { sno: 17, rno: '20211A0538', name: 'NEHA BOMMA', offers: 'ACCENTUREHACK-DIVA & CAPGEMINI-SOFTWARE-ENGINEER' },
    { sno: 18, rno: '20211A0539', name: 'B. VINAY SAGAR', offers: 'INTELLIPAAT' },
    { sno: 19, rno: '20211A0540', name: 'BUSSA GIRISH', offers: 'LTI-MINDTREE' },
    { sno: 20, rno: '20211A0541', name: 'SHIVANI CHERUPALLY', offers: 'ACCENTURE-ASE & VERIZON' },
    { sno: 21, rno: '20211A0545', name: 'CHAVVA AKSHITHA', offers: 'ACMEGRADE & LTI-MINDTREE' },
    { sno: 22, rno: '20211A0546', name: 'CHERUKU KIRAN PRIYA REDDY', offers: 'SIFY' },
    { sno: 23, rno: '20211A0547', name: 'CHERUKU SHREYA REDDY', offers: 'BANK OF AMERICA & TECH MAHINDRA & ACCENTUREHACK-DIVA' },
    { sno: 24, rno: '20211A0548', name: 'CHETTY SAICHARAN', offers: 'ACCENTURE-ASE' },
    { sno: 25, rno: '20211A0549', name: 'CHINTAPALATI ANIRUDH VARMA', offers: 'ACCENTURE-ASE' },
    { sno: 26, rno: '20211A0550', name: 'CHINTAM SURYA PRATEEK NAIDU', offers: 'FORAGE-AI' },
    { sno: 27, rno: '20211A0551', name: 'CHINTAPATLA ABHIRAM', offers: 'REALPAGE' },
    { sno: 28, rno: '20211A0552', name: 'CHINTIRALA LAKSHMI TEJASWINI', offers: 'SKILL DUNIYA' },
    { sno: 29, rno: '20211A0553', name: 'RUSHIKESH REDDY', offers: 'TECH MAHINDRA' },
    { sno: 30, rno: '20211A0554', name: 'CHITYALA NANDHINI', offers: 'KPIT' },
    { sno: 31, rno: '20211A0557', name: 'CHOURIGARI NAVEEN KUMAR', offers: 'STATE STREET' },
    { sno: 32, rno: '20211A0559', name: 'D VASAVI REDDY', offers: 'RENAULT NISSAN & PORTER' },
    { sno: 33, rno: '20211A0560', name: 'DAGGUPALLI. CHANDRADEEP SRI SAI', offers: 'TCSNINJA-HACKQUEST' },
    { sno: 34, rno: '20211A0561', name: 'DAKEY BHAVYA SREE', offers: 'UST GLOBAL' },
    { sno: 35, rno: '20211A0562', name: 'SRI MOURYA DANTHALA', offers: 'VERISK2 & ACCENTURE-ASE' },
    { sno: 36, rno: '20211A0563', name: 'VIGHNESHWARA DASOJU', offers: 'VERISK2' },
    { sno: 37, rno: '20211A0567', name: 'ADVAITHA DESHPANDE', offers: 'TECH MAHINDRA & UST GLOBAL' },
    { sno: 38, rno: '20211A0569', name: 'DEVENDAR CHOUDHARY', offers: 'ACCENTURE-ASE' },
    { sno: 39, rno: '20211A0571', name: 'DHARAVATH NITHISH NAYAK', offers: 'ACMEGRADE & EVERGENT TECHNOLOGIES' },
    { sno: 40, rno: '20211A0573', name: 'DHATRIKA KAVYA', offers: 'ACCENTURE-ASE' },
    { sno: 41, rno: '20211a0574', name: 'SAHASRI DIMMULA', offers: 'REALPAGE' },
    { sno: 42, rno: '20211A0575', name: 'DONTHULA THANUSRI', offers: 'LTI-MINDTREE' },
    { sno: 43, rno: '20211A0577', name: 'G.SAI KIRAN', offers: 'TCS-DIGITAL' },
    { sno: 44, rno: '20211A0578', name: 'G. SINDHU', offers: 'ACMEGRADE & WIPRO1' },
    { sno: 45, rno: '20211A0579', name: 'HARI DEEP GADDAM', offers: 'REALPAGE' },
    { sno: 46, rno: '20211A0580', name: 'GADDE ANIL', offers: 'UST GLOBAL & TECHMAHINDRA-PHASE 1' },
    { sno: 47, rno: '20211A0582', name: 'GAJAM BHAVAN', offers: 'ACCENTURE-ASE & RENAULT NISSAN' },
    { sno: 48, rno: '20211A0583', name: 'GELLA RAHUL YADAV', offers: 'EVERGENT TECHNOLOGIES' },
    { sno: 49, rno: '20211A0585', name: 'GARNEPUDI AKANKSHA', offers: 'BANK OF AMERICA' },
    { sno: 50, rno: '20211A0591', name: 'GOLLENA SATHVIKA', offers: 'BANK OF AMERICA & KPIT & OPTUM1-PHASE2' },
    { sno: 51, rno: '20211A0592', name: 'GOLLI JITHENDRAVENKATA MAHESH SATYAANUDEEP', offers: 'MODAK & EPAM' },
    { sno: 52, rno: '20211A0593', name: 'GORILA KRISHNA', offers: 'ACCENTURE-ASE & COGNIZANT-GENC' },
    { sno: 53, rno: '20211A0597', name: 'GUNTUKU NARESH', offers: 'SECHAY' },
    { sno: 54, rno: '20211A0598', name: 'SOUMYA GURAJAPU', offers: 'ACCENTURE-ASE & TCS-DIGITAL' },
    { sno: 55, rno: '20211A05A1', name: 'GUTHULA SAIRAMA KRISHNACHAITANYA', offers: 'EPAM & WIPRO1' },
    { sno: 56, rno: '20211A05A4', name: 'INDUKURI UDAY KUMAR REDDY', offers: 'TECH MAHINDRA & REALPAGE' },
    { sno: 57, rno: '20211A05A5', name: 'ITIKYALA LAKSHMI VENKATA SHISHIR', offers: 'TECH MAHINDRA & TCS-PRIME' },
    { sno: 58, rno: '20211A05A7', name: 'JAKKARIGARI PREETHI CHRISTINA', offers: 'CAPGEMINI-SOFTWARE-ENGINEER & EKA MOBILITY' },
    { sno: 59, rno: '20211A05A8', name: 'CHAITRA SAI JALDA', offers: 'SYNOPSYS' },
    { sno: 60, rno: '20211A05A9', name: 'JAMPANI ABHILASH', offers: 'COGNIZANT-GENC' },
    { sno: 61, rno: '20211A05B0', name: 'JANGAM GREESHMA', offers: 'ACCENTURE-ASE' },
    { sno: 62, rno: '20211A05B1', name: 'JAVVAJI DIVYA SREE', offers: 'TECH MAHINDRA & REALPAGE' },
    { sno: 63, rno: '20211A05B2', name: 'JELLA SREEJA', offers: 'UST GLOBAL & CAPGEMINI-SOFTWARE-ENGINEER & TCS-DIGITAL' },
    { sno: 64, rno: '20211A05B4', name: 'JOGINI SHRUTHI', offers: 'UST GLOBAL' },
    { sno: 65, rno: '20211A05B5', name: 'SIRISHA JOGU', offers: 'EVERGENT-QA' },
    { sno: 66, rno: '20211A05B6', name: 'SHREEYA JUKANTI', offers: 'EVERGENT-QA' },
    { sno: 67, rno: '20211A05B7', name: 'K CHANDANA', offers: 'ACCENTURE-ASE & TCS-PRIME' },
    { sno: 68, rno: '20211A05B9', name: 'TEJESH VARMA KALIDINDI', offers: 'SIDS FARM' },
    { sno: 69, rno: '20211A05C2', name: 'KARRA SUCHETHAN REDDY', offers: 'TCS-DIGITAL' },
    { sno: 70, rno: '20211A05C4', name: 'ARCHANA KASAM', offers: 'OPTUM1-PHASE2' },
    { sno: 71, rno: '20211A05C9', name: 'KOGILA SHIRISHA', offers: 'TCS-DIGITAL' },
    { sno: 72, rno: '20211A05D0', name: 'KOLAMURI BHARGAV', offers: 'VERIZON & TECH MAHINDRA' },
    { sno: 73, rno: '20211A05D2', name: 'KOMANPALLY RAKSHITH', offers: 'UST GLOBAL' },
    { sno: 74, rno: '20211A05D5', name: 'KONDA VARSHA', offers: 'ACMEGRADE & UST GLOBAL & BEL' },
    { sno: 75, rno: '20211A05D6', name: 'KONDAKALLA BHOOMIKA', offers: 'MOVIDU' },
    { sno: 76, rno: '20211A05D8', name: 'KONDURU SAMBHAVI', offers: 'BYTES OF INDIA-PHASE 1' },
    { sno: 77, rno: '20211A05D9', name: 'SAI NIHAL KONDUTI', offers: 'TECH MAHINDRA' },
    { sno: 78, rno: '20211A05E0', name: 'KOPPOLU DHEERAJ KUMAR REDDY', offers: 'COGNIZANT-GENC & TCS-DIGITAL' },
    { sno: 79, rno: '20211A05E1', name: 'K LIKHITHA PRIYANKA', offers: 'ACMEGRADE' },
    { sno: 80, rno: '20211A05E3', name: 'KOTLA GOWTHAM KUMAR REDDY', offers: 'UST GLOBAL & TECHMAHINDRA-PHASE 1 & TCS-DIGITAL' },
    { sno: 81, rno: '20211A05E6', name: 'LAKAVATH VIJAY KUMAR', offers: 'EVERGENT-QA' },
    { sno: 82, rno: '20211A05E8', name: 'M PRASHANTH RAO', offers: 'TECH MAHINDRA & SECHAY & UST GLOBAL & REALPAGE' },
    { sno: 83, rno: '20211A05F4', name: 'MADUPATHI BASAVA PRASAD', offers: 'EVERGENT TECHNOLOGIES' },
    { sno: 84, rno: '20211A05F5', name: 'MAHIJITH PUNNANI', offers: 'UST GLOBAL' },
    { sno: 85, rno: '20211A05F8', name: 'MALI PASHUPATHI', offers: 'MOVIDU & TCS-NINJA' },
    { sno: 86, rno: '20211A05F9', name: 'MALLAIAHGARI ROHITH', offers: 'ACCENTURE-ASE' },
    { sno: 87, rno: '20211A05G0', name: 'SAMHITHA MALLANNAGARI', offers: 'MICROSOFT' },
    { sno: 88, rno: '20211A05G3', name: 'MAMIDIMADA SRINITHA', offers: 'RENAULT NISSAN & OPTUM1-PHASE2' },
    { sno: 89, rno: '20211A05G4', name: 'MAMILLA MANOJ KUMAR', offers: 'TEJAS NETWORKS & TECH MAHINDRA' },
    { sno: 90, rno: '20211A05G8', name: 'MANTINA PRANEETH VARMA', offers: 'TCS-DIGITAL & BLUE COPA' },
    { sno: 91, rno: '20211A05H0', name: 'MD ALTAF ZAMEER', offers: 'RENAULT NISSAN' },
    { sno: 92, rno: '20211A05H2', name: 'Medi Bhavani', offers: 'KPIT' },
    { sno: 93, rno: '20211A05H3', name: 'Medi Hemanth Kumar', offers: 'WIPRO1' },
    { sno: 94, rno: '20211A05H4', name: 'TRINATH MEDURI', offers: 'COGNIZANT-GENC & TCS-NINJA' },
    { sno: 95, rno: '20211A05H5', name: 'MEKALA CHINNA RAJU', offers: 'EVERGENT-QA' },
    { sno: 96, rno: '20211A05H6', name: 'VISHLESHANA MEKALA', offers: 'REALPAGE' },
    { sno: 97, rno: '20211A05H7', name: 'MENUGU RAJESHWARI', offers: 'BANK OF AMERICA & TECH MAHINDRA' },
    { sno: 98, rno: '20211A05H8', name: 'MOHAMMED ASLAM', offers: 'RENAULT NISSAN & TECH MAHINDRA' },
    { sno: 99, rno: '20211A05J1', name: 'MOHAMMED WASEEM UDDIN', offers: 'VIGOCARE' },
    { sno: 100, rno: '20211A05J8', name: 'NALLAKUNTA YAMINI', offers: 'UST GLOBAL' },
    { sno: 101, rno: '20211A05K1', name: 'NAVATHE SIDDHARTHA', offers: 'SAGARSOFT' },
    { sno: 102, rno: '20211A05K2', name: 'VARSHINI NEERUDI', offers: 'ACCENTURE-ASE' },
    { sno: 103, rno: '20211A05K4', name: 'Nirudi Sai Karthikeya', offers: 'BYTES OF INDIA-HAM' },
    { sno: 104, rno: '20211A05K9', name: 'POLASI SAI THARUN', offers: 'MOVIDU & VIGOCARE' },
    { sno: 105, rno: '20211A05L1', name: 'PAGADIRAI HANOCK RAJU', offers: 'SECHAY' },
    { sno: 106, rno: '20211A05L2', name: 'PALAGUMMI YASWANTH SAI', offers: 'EVERGENT-QA & LTI-MINDTREE' },
    { sno: 107, rno: '20211A05L3', name: 'P.RUSHIKESH REDDY', offers: 'ACMEGRADE' },
    { sno: 108, rno: '20211A05L4', name: 'PALNATI VENKATA YASHWANTH REDDY', offers: 'ACCENTURE-ASE & TCS-DIGITAL' },
    { sno: 109, rno: '20211A05L5', name: 'PALPUNURI RAVALIKA', offers: 'SIFY' },
    { sno: 110, rno: '20211A05L7', name: 'PARSHAPALLI GLORY', offers: 'WIPRO1' },
    { sno: 111, rno: '20211A05L8', name: 'AVINASH REDDY PASAM', offers: 'ACCENTURE-ASE' },
    { sno: 112, rno: '20211A05L9', name: 'PATHLOTH GAGANA SRI', offers: 'BANK OF AMERICA & KPIT' },
    { sno: 113, rno: '20211A05M0', name: 'PATHLOTH SANTHOSH', offers: 'EKA MOBILITY' },
    { sno: 114, rno: '20211A05M2', name: 'PEDDIREDDY ANISH REDDY', offers: 'RENAULT NISSAN & TECH MAHINDRA' },
    { sno: 115, rno: '20211A05M3', name: 'PENTI MANAS', offers: 'TECH MAHINDRA & UST GLOBAL' },
    { sno: 116, rno: '20211A05M4', name: 'PENUMATCHA BHAVANA', offers: 'SIFY' },
    { sno: 117, rno: '20211A05M8', name: 'PONNAM SAI TEJA', offers: 'MODAK & TECH MAHINDRA & INFOSYS' },
    { sno: 118, rno: '20211A05M9', name: 'PONUGOTI YESHWITHA', offers: 'ACCENTURE-ASE' },
    { sno: 119, rno: '20211A05N4', name: 'PULUGAM HARSHITHA', offers: 'CAPGEMINI-SOFTWARE-ENGINEER' },
    { sno: 120, rno: '20211A05N5', name: 'RACHAMALLI SREENIVAS', offers: 'ACCENTURE-ASE' },
    { sno: 121, rno: '20211A05N7', name: 'RAMA SRIJAN', offers: 'ACMEGRADE' },
    { sno: 122, rno: '20211A05N8', name: 'Ramgari Revanth', offers: 'RISAMSOFT-OFF CAMPUS' },
    { sno: 123, rno: '20211A05N9', name: 'RAMUNI NIKHIL SAI', offers: 'TCS-DIGITAL' },
    { sno: 124, rno: '20211A05P0', name: 'RANABOTHU CHANDANA', offers: 'QUALIZEAL & PORTER' },
    { sno: 125, rno: '20211A05P5', name: 'RUDRA MOHAN', offers: 'ACCENTURE-ASE' },
    { sno: 126, rno: '20211A05P8', name: 'SALUKUTI SAI CHARAN REDDY', offers: 'TCS-DIGITAL' },
    { sno: 127, rno: '20211A05P9', name: 'SANA NIKHIL', offers: 'LTI-MINDTREE' },
    { sno: 128, rno: '20211A05Q6', name: 'SEEMALA SAI KUMAR', offers: 'UST GLOBAL & TECHMAHINDRA-PHASE 1' },
    { sno: 129, rno: '20211A05Q7', name: 'SHAIK MUNEER PASHA', offers: 'UST GLOBAL' },
    { sno: 130, rno: '20211A05Q8', name: 'SHANABOINA NIHARIKA', offers: 'CAPGEMINI-SOFTWARE-ENGINEER' },
    { sno: 131, rno: '20211A05R2', name: 'SIVANOLLU DINESH', offers: 'UST GLOBAL' },
    { sno: 132, rno: '20211A05R3', name: 'SIVARATRI TEJA', offers: 'BYTES OF INDIA-HAM' },
    { sno: 133, rno: '20211A05R6', name: 'SYAMALA CHAITANYA', offers: 'ACCENTURE-ASE & VERIZON & TECH MAHINDRA' },
    { sno: 134, rno: '20211A05R7', name: 'TALLA NITHIN', offers: 'UST GLOBAL & TCS-DIGITAL' },
    { sno: 135, rno: '20211A05R8', name: 'TANALA MADHAVA SRI KRISHNA PAVAN', offers: 'UST GLOBAL & TCS-DIGITAL' },
    { sno: 136, rno: '20211A05R9', name: 'TANGIRALA ABHISHEK', offers: 'LTI-MINDTREE' },
    { sno: 137, rno: '20211A05T1', name: 'SHRAVIKA THAMMISHETTI', offers: 'BANK OF AMERICA & RENAULT NISSAN' },
    { sno: 138, rno: '20211A05T2', name: 'THANNEERU YOGA NANDHINI', offers: 'TCS-PEGA & BANK OF AMERICA & TECH MAHINDRA' },
    { sno: 139, rno: '20211A05T4', name: 'THIRUMALA RAJA VENKATA SAI KUMAR', offers: 'TCS-NINJA' },
    { sno: 140, rno: '20211A05T7', name: 'THOUTI PRANAV', offers: 'ACCENTURE-ADVANCED-ASE & DARWINBOX-TECHNICAL ANALYST INTERN' },
    { sno: 141, rno: '20211A05T8', name: 'Thumma Hanushka', offers: 'MOVIDU & UST GLOBAL & CAPGEMINI-SOFTWARE-ENGINEER' },
    { sno: 142, rno: '20211A05U5', name: 'VADLA VAISHNAVI', offers: 'SIFY' },
    { sno: 143, rno: '20211A05V1', name: 'VARADA CHANDU', offers: 'BYTES OF INDIA-PHASE 1' },
    { sno: 144, rno: '20211A05V3', name: 'VEBUTHI NAVEEN', offers: 'MIVADA' },
    { sno: 145, rno: '20211A05V4', name: 'VEGESNA SAI TEJA VARMA', offers: 'COGNIZANT-GENC' },
    { sno: 146, rno: '20211A05V7', name: 'VELPULA SRAVYA', offers: 'CAPGEMINI-SOFTWARE-ENGINEER' },
    { sno: 147, rno: '20211A05V8', name: 'VEMULA ABHINAYA', offers: 'ACCENTUREHACK-DIVA' },
    { sno: 148, rno: '20211A05W3', name: 'VUSUVANDLA BASANTHI', offers: 'CAPGEMINI-SOFTWARE-ENGINEER & TCS-DIGITAL' },
    { sno: 149, rno: '20211A05W5', name: 'YANAMALA PRANATHI', offers: 'MODAK & TECH MAHINDRA' },
    { sno: 150, rno: '20211A05W6', name: 'YARLAGADDA PRAGATHI KRISHNA', offers: 'BANK OF AMERICA' },
    { sno: 151, rno: '20211A05W7', name: 'YELATI VISHNU VARDHAN REDDY', offers: 'COGNIZANT-GENC' },
    { sno: 152, rno: '20211A05X0', name: 'YERRAMSETTY. SHIVA RAMA KRISHNA', offers: 'EVERGENT-QA' },
    { sno: 153, rno: '21215A0501', name: 'ABHILASH KONDA', offers: 'MOVIDU & SECHAY' },
    { sno: 154, rno: '21215A0508', name: 'KOYALKAR GOPIKRISHNA', offers: 'EPAM' },
    { sno: 155, rno: '21215a0509', name: 'JANGAM HASINI', offers: 'KPIT' },
    { sno: 156, rno: '21215A0516', name: 'NAKIRTHI MOUNIKA', offers: 'MOVIDU & KPIT' },
    { sno: 157, rno: '21215A0521', name: 'CHENNOJU SATHVIKA', offers: 'KPIT' },
    { sno: 158, rno: '21215A0522', name: 'PEDDAGOLLA SHIREESHA', offers: 'CAPGEMINI-SOFTWARE-ENGINEER' },
    { sno: 159, rno: '21215A0525', name: 'VUTKURI VARSHA', offers: 'SIFY' },
    { sno: 160, rno: '21215A0526', name: 'GOVIND VARSHITHA', offers: 'KPIT' },
    { sno: 161, rno: '21215A0527', name: 'APPALA VASU HEMANTH', offers: 'TCS-PEGA' },
    { sno: 162, rno: '21215A0530', name: 'PATTANKAR VINAY PRAKASH', offers: 'UST GLOBAL & TCS-DIGITAL' },
  ];

  // Internship data
  const internshipData = [
    { company: 'Accenture', count: 12, logo: '/images/companies/Accenture_logo.png' },
    { company: 'Deloitte', count: 8, logo: '/images/companies/Deloitte_logo.png' },
    { company: 'Wipro', count: 15, logo: '/images/companies/Wipro_logo.jpg' },
    { company: 'Cisco', count: 4, logo: '/images/companies/Cisco_logo.png' },
    { company: 'Cognizant', count: 20, logo: '/images/companies/Cognizant_logo.png' },
    { company: 'Amazon', count: 5, logo: '/images/companies/Amazon_logo.webp' },
    { company: 'TCS', count: 12, logo: '/images/companies/TCS_logo.png' },
    { company: 'Infosys', count: 8, logo: '/images/companies/Infosys_logo.png' },
  ];

  // Auto-play for internships carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentInternship((prev) => (prev + 1) % (internshipData.length - 3)); // show 4 at a time
    }, 5000);
    return () => clearInterval(timer);
  }, [internshipData.length]);

  // Statistics data - Updated for 2024 Batch
  const stats = [
    {
      icon: FaBriefcase,
      number: '163',
      label: 'COMPANIES',
      subtitle: 'Visited for Placements',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: FaHandshake,
      number: '181',
      label: 'STUDENTS PLACED',
      subtitle: 'Batch 2024 (2021-25)',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      icon: FaTrophy,
      number: '49.12 LPA',
      label: 'HIGHEST',
      subtitle: 'Package - Microsoft',
      gradient: 'from-blue-700 to-blue-800'
    }
  ];

  // Dream offers data
  const dreamOffers = [
    { company: 'Microsoft', salary: '49.12 LPA', students: 1, batch: '2024', logo: '/images/companies/microsoft.webp' },
    { company: 'Synopsys', salary: '18 LPA', students: 1, batch: '2024', logo: '/images/companies/synopsys.png' },
    { company: 'Bank of America', salary: '12 LPA', students: 12, batch: '2024', logo: '/images/companies/bankofamerica.png' },
    { company: 'EPAM', salary: '10 LPA', students: 3, batch: '2024', logo: '/images/companies/Epam.jpg' },
    { company: 'UST Global', salary: '8 LPA', students: 25, batch: '2024', logo: '/images/companies/ustglobal.png' },
    { company: 'Tech Mahindra', salary: '7.5 LPA', students: 22, batch: '2024', logo: '/images/companies/techmahindra.png' },
    { company: 'TCS Digital', salary: '7 LPA', students: 18, batch: '2024', logo: '/images/companies/TCS_logo.png' },
    { company: 'Accenture', salary: '6.5 LPA', students: 28, batch: '2024', logo: '/images/companies/Accenture_logo.png' },
  ];

  // Placement highlights - Top performers from 2024 batch
  const placementHighlights = [
    { name: 'SAMHITHA MALLANNAGARI', package: '49.12 LPA', company: 'Microsoft', year: '2024', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop' },
    { name: 'CHAITRA SAI JALDA', package: '18 LPA', company: 'Synopsys', year: '2024', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop' },
    { name: 'BATCHU KANAKA DURGA PRIYANKA', package: '12 LPA', company: 'Bank of America', year: '2024', image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&h=500&fit=crop' },
    { name: 'KOYALKAR GOPIKRISHNA', package: '10 LPA', company: 'EPAM', year: '2024', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop' },
    { name: 'JELLA SREEJA', package: '8 LPA', company: 'UST Global', year: '2024', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=500&fit=crop' },
    { name: 'MENUGU RAJESHWARI', package: '7.5 LPA', company: 'Tech Mahindra', year: '2024', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop' },
  ];

  // Top recruiters
  const topRecruiters = [
    { name: 'Accenture', logo: '/images/companies/Accenture_logo.png' },
    { name: 'Amazon', logo: '/images/companies/Amazon_logo.webp' },
    { name: 'Bank of America', logo: '/images/companies/bankofamerica.png' },
    { name: 'BEL', logo: '/images/companies/bel.svg' },
    { name: 'Capgemini', logo: '/images/companies/capgemini.png' },
    { name: 'Cisco', logo: '/images/companies/Cisco_logo.png' },
    { name: 'Cognizant', logo: '/images/companies/Cognizant_logo.png' },
    { name: 'Darwinbox', logo: '/images/companies/darwin.webp' },
    { name: 'Deloitte', logo: '/images/companies/Deloitte_logo.png' },
    { name: 'EPAM', logo: '/images/companies/Epam.jpg' },
    { name: 'Evergent', logo: '/images/companies/evergent.png' },
    { name: 'Forage – AI', logo: '/images/companies/forage.png' },
    { name: 'Infosys', logo: '/images/companies/Infosys_logo.png' },
    { name: 'Intellipaat', logo: '/images/companies/intellipaat.png' },
    { name: 'KPIT', logo: '/images/companies/Kpit.png' },
    { name: 'LTI Mindtree', logo: '/images/companies/Lti-mindtree.png' },
    { name: 'Microsoft', logo: '/images/companies/microsoft.webp' },
    { name: 'Mivada', logo: '/images/companies/mivada.jpeg' },
    { name: 'Movidu', logo: '/images/companies/movidu.webp' },
    { name: 'Optum', logo: '/images/companies/optum.png' },
    { name: 'Porter', logo: '/images/companies/porter.png' },
    { name: 'Qualizeal', logo: '/images/companies/qualizeal.png' },
    { name: 'RealPage', logo: '/images/companies/realpage.png' },
    { name: 'Renault Nissan', logo: '/images/companies/renault.jpg' },
    { name: 'Risamsoft', logo: '/images/companies/risamsoft.png' },
    { name: 'Sagarsoft', logo: '/images/companies/sagarsoft.png' },
    { name: 'Sechay', logo: '/images/companies/sechay.png' },
    { name: 'Sids Farm', logo: '/images/companies/sidsfarm.png' },
    { name: 'Sify', logo: '/images/companies/sify.png' },
    { name: 'Skill Duniya', logo: '/images/companies/skilldunia.png' },
    { name: 'State Street', logo: '/images/companies/statestreet.png' },
    { name: 'Synopsys', logo: '/images/companies/synopsys.png' },
    { name: 'TCS', logo: '/images/companies/TCS_logo.png' },
    { name: 'TAS', logo: '/images/companies/TAS_logo.jpg' },
    { name: 'Tech Mahindra', logo: '/images/companies/techmahindra.png' },
    { name: 'Tejas Networks', logo: '/images/companies/tejasnetwork.jpeg' },
    { name: 'UST Global', logo: '/images/companies/ustglobal.png' },
    { name: 'Verizon', logo: '/images/companies/verizon.png' },
    { name: 'Verisk', logo: '/images/companies/verisk.png' },
    { name: 'Wipro', logo: '/images/companies/Wipro_logo.jpg' },
  ];

  // Placement Page Links
  const placementLinks = [
    { id: 'Stats', label: 'Overview' },
    { id: 'DetailedStats', label: 'Detailed Stats' },
    { id: 'Recruiters', label: 'Recruiters' },
    { id: 'SalaryStats', label: 'Salary' },
    { id: 'DreamOffers', label: 'Dream Offers' },
    { id: 'Internships', label: 'Internships' },
    { id: 'Highlights', label: 'Highlights' },
    { id: 'PlacementData', label: '2024 Placements' },
    { id: 'Glimpses', label: 'Glimpses' },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <Header customLinks={placementLinks} />

      {/* Hero Section */}
      <div
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=2000&h=1200&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Subtle Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-28 max-w-7xl mx-auto text-center">
          <div className="animate-fadeIn">
            <h1 className="text-white text-4xl md:text-7xl font-bold leading-tight tracking-tight mb-6 drop-shadow-2xl">
              181 Students Placed
              <span className="block text-blue-400 mt-2">Batch 2024 (2021-25)</span>
            </h1>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto my-6 md:my-8"></div>
            <p className="text-white text-base md:text-xl font-light leading-relaxed max-w-4xl mx-auto drop-shadow-lg px-2">
              At B V Raju Institute of Technology, Narsapur (BVRIT), the Computer Science & Engineering Department is dedicated to building future-ready technology professionals. With a strong focus on core computer science fundamentals, industry-aligned learning, and continuous skill development, our CSE students are empowered to transition seamlessly from academics to successful professional careers.
            </p>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>

      {/* Main Statistics Section */}
      <section id="Stats" className="w-full py-16 px-8 md:px-28 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-slate-800 text-3xl md:text-4xl font-bold">
              Placements Statistics (24-25)
            </h2>
            <div className="w-full h-px bg-slate-300 mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Companies */}
            <div className="relative h-72 md:h-96 rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80"
                alt="Companies"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <FaBriefcase className="text-3xl md:text-4xl mb-3 md:mb-4" />
                <h3 className="text-4xl md:text-5xl font-bold mb-1 md:mb-2">425</h3>
                <p className="text-lg md:text-xl font-semibold mb-1">COMPANIES</p>
                <p className="text-xs md:text-sm opacity-90">For Campus Placements</p>
              </div>
            </div>

            {/* Card 2 - Placements */}
            <div className="relative h-72 md:h-96 rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&q=80"
                alt="Placements"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <FaHandshake className="text-3xl md:text-4xl mb-3 md:mb-4" />
                <h3 className="text-4xl md:text-5xl font-bold mb-1 md:mb-2">1873</h3>
                <p className="text-lg md:text-xl font-semibold mb-1">PLACEMENTS</p>
                <p className="text-xs md:text-sm opacity-90">Offered in Session</p>
              </div>
            </div>

            {/* Card 3 - Highest Package */}
            <div className="relative h-72 md:h-96 rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80"
                alt="Highest Package"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <FaTrophy className="text-3xl md:text-4xl mb-3 md:mb-4" />
                <h3 className="text-4xl md:text-5xl font-bold mb-1 md:mb-2">39 LPA</h3>
                <p className="text-lg md:text-xl font-semibold mb-1">HIGHEST</p>
                <p className="text-xs md:text-sm opacity-90">Package Offered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Statistics Section */}
      <section id="DetailedStats" className="w-full py-12 px-8 md:px-16 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 px-4">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              CSE Department – <span className="font-semibold text-slate-800">BVRIT, Narsapur</span><br className="md:hidden" />
              (Batch: <span className="font-semibold text-slate-800">2022–2026</span> | <span className="font-semibold text-slate-800 whitespace-nowrap">IV Year Students</span>)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student Strength & Eligibility */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-5 pb-3 border-b border-slate-200 flex items-center gap-2">
                <FaUsers className="text-blue-500 text-lg" />
                Student Strength & Eligibility
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Total Students on Roll:', value: '349' },
                  { label: 'Students Registered for CRT:', value: '338' },
                  { label: 'Eligible for Placements:', value: '292' },
                  { label: 'Not Registered for CRT:', value: '11' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-dashed border-slate-200 last:border-0">
                    <span className="text-slate-700 text-sm font-medium">{item.label}</span>
                    <span className="text-lg font-bold text-blue-600 leading-none">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Placement Outcomes */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-5 pb-3 border-b border-slate-200 flex items-center gap-2">
                <FaChartLine className="text-blue-500 text-lg" />
                Placement Outcomes
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Total Students Placed:', value: '181' },
                  { label: 'Placement Percentage:', value: '61.99%' },
                  { label: 'Multiple Offers:', value: '258' },
                  { label: 'Internships Secured:', value: '52' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-dashed border-slate-200 last:border-0">
                    <span className="text-slate-700 text-sm font-medium">{item.label}</span>
                    <span className="text-lg font-bold text-blue-600 leading-none">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gender-wise Details */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-5 pb-3 border-b border-slate-200 flex items-center gap-2">
                <FaGraduationCap className="text-blue-500 text-lg" />
                Gender-wise Placement Details
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Boys Placed:', value: '98' },
                  { label: 'Girls Placed:', value: '83' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-dashed border-slate-200 last:border-0">
                    <span className="text-slate-700 text-sm font-medium">{item.label}</span>
                    <span className="text-lg font-bold text-blue-600 leading-none">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Unplaced Statistics */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-5 pb-3 border-b border-slate-200 flex items-center gap-2">
                <FaUsers className="text-blue-500 text-lg" />
                Unplaced Statistics
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Total Students Unplaced:', value: '111' },
                  { label: 'Boys Unplaced:', value: '68' },
                  { label: 'Girls Unplaced:', value: '43' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-dashed border-slate-200 last:border-0">
                    <span className="text-slate-700 text-sm font-medium">{item.label}</span>
                    <span className="text-lg font-bold text-blue-600 leading-none">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Valued Patrons (Top Recruiters Carousel) */}
      <section id="Recruiters" className="w-full py-20 px-8 md:px-28 bg-slate-900 text-white overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Valued Patrons</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              BVRIT has a vast network of recruiters that includes Fortune 500 companies, startups, and various other organizations. Some of our notable recruiters include:
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-6"></div>
          </div>

          {/* Infinite Scroll Animation */}
          <div className="relative">
            <style>{`
              @keyframes scroll-left {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .scroll-container {
                display: flex;
                animation: scroll-left 50s linear infinite;
              }
              .scroll-container:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div className="flex overflow-hidden">
              <div className="scroll-container">
                {[...topRecruiters, ...topRecruiters].map((company, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-64 h-40 mx-4 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center p-6 border border-slate-700/30"
                  >
                    {company.logo ? (
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const span = document.createElement('span');
                            span.className = 'text-slate-800 font-bold text-center px-4 break-words';
                            span.innerText = company.name;
                            parent.appendChild(span);
                          }
                        }}
                      />
                    ) : (
                      <span className="text-slate-800 font-bold text-center px-4 break-words">
                        {company.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Companies with 20+ LPA and 100+ Offers */}
          {/* Companies with 20+ LPA and 100+ Offers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mt-16 md:mt-20 px-4 md:px-0">
            {/* 20+ LPA */}
            <div className="text-center">
              <div className="mb-6 md:mb-8">
                <h3 className="text-slate-400 text-sm md:text-lg mb-1 md:mb-2 uppercase tracking-widest">Companies offering</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-400">20+ LPA</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {[
                  { name: 'Amazon', logo: '/images/companies/Amazon_logo.webp' },
                  { name: 'Cisco', logo: '/images/companies/Cisco_logo.png' },
                  { name: 'Cognizant', logo: '/images/companies/Cognizant_logo.png' },
                  { name: 'Deloitte', logo: '/images/companies/Deloitte_logo.png' },
                  { name: 'Infosys', logo: '/images/companies/Infosys_logo.png' },
                  { name: 'Synopsys', logo: '/images/companies/synopsys.png' }
                ].map((company, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3 md:p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center h-20 md:h-24">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-w-full max-h-12 md:max-h-16 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 100+ Offers */}
            <div className="text-center">
              <div className="mb-6 md:mb-8">
                <h3 className="text-slate-400 text-sm md:text-lg mb-1 md:mb-2 uppercase tracking-widest">Companies offering</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-400">100+ Offers</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {[
                  { name: 'TCS', logo: '/images/companies/TCS_logo.png' },
                  { name: 'Accenture', logo: '/images/companies/Accenture_logo.png' },
                  { name: 'Wipro', logo: '/images/companies/Wipro_logo.jpg' },
                  { name: 'LTI Mindtree', logo: '/images/companies/Lti-mindtree.png' },
                  { name: 'KPIT', logo: '/images/companies/Kpit.png' },
                  { name: 'Capgemini', logo: '/images/companies/capgemini.png' }
                ].map((company, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3 md:p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center h-20 md:h-24">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-w-full max-h-12 md:max-h-16 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Median Salary & Packages Section */}
      <section id="SalaryStats" className="w-full py-16 md:py-20 px-6 md:px-28 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Median Salary (B.Tech Only) */}
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                Median Salary
              </h2>
              <div className="w-full h-px bg-slate-300 mb-6"></div>

              {/* Bar Chart */}
              <div className="bg-slate-50 rounded-lg p-6 h-80">
                <div className="flex items-end justify-between gap-2 h-56">
                  {[
                    { year: '2021', value: 4.2 },
                    { year: '2022', value: 5.5 },
                    { year: '2023', value: 4.5 },
                    { year: '2024', value: 4.8 },
                    { year: '2025', value: 3.8 }
                  ].map((data, idx) => {
                    const maxValue = 6;
                    const heightPercent = (data.value / maxValue) * 100;
                    return (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full flex items-end justify-center" style={{ height: '180px' }}>
                          <div
                            className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t transition-all duration-500 hover:from-blue-600 hover:to-blue-500 flex items-start justify-center pt-2 shadow-md"
                            style={{ height: `${heightPercent}%` }}
                          >
                            <span className="text-xs font-bold text-white">{data.value}</span>
                          </div>
                        </div>
                        <span className="text-xs text-slate-600 font-medium">{data.year}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 text-center">
                  <span className="text-xs text-slate-600 font-medium">B.Tech (LPA)</span>
                </div>
              </div>
            </div>

            {/* Packages at BVRIT - 3 Charts */}
            {[
              {
                title: 'Highest Package',
                values: [
                  { year: '2022', value: 14.65 },
                  { year: '2023', value: 10.8 },
                  { year: '2024', value: 10 }
                ]
              },
              {
                title: 'Average Package',
                values: [
                  { year: '2022', value: 4.5 },
                  { year: '2023', value: 3.8 },
                  { year: '2024', value: 4.5 }
                ]
              },
              {
                title: 'Median Package',
                values: [
                  { year: '2022', value: 4.25 },
                  { year: '2023', value: 3.6 },
                  { year: '2024', value: 3.1 }
                ]
              }
            ].map((package_data, idx) => {
              const maxValue = Math.max(...package_data.values.map(v => v.value));
              const minValue = Math.min(...package_data.values.map(v => v.value));
              const range = maxValue - minValue;

              return (
                <div key={idx}>
                  <h2 className="text-xl font-bold text-slate-800 mb-2">
                    {package_data.title}
                  </h2>
                  <div className="w-full h-px bg-slate-300 mb-6"></div>

                  {/* Enhanced Area Chart */}
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-lg p-6 shadow-sm border border-slate-200 h-80">
                    <div className="relative h-56">
                      {/* Y-axis grid lines */}
                      <div className="absolute inset-0 flex flex-col justify-between">
                        {[0, 1, 2, 3].map((i) => (
                          <div key={i} className="border-b border-slate-200/50"></div>
                        ))}
                      </div>

                      {/* Y-axis labels */}
                      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-slate-500 pr-3 -ml-2">
                        {[maxValue, maxValue * 0.66, maxValue * 0.33, 0].map((value, i) => (
                          <span key={i} className="text-right">{value.toFixed(1)}</span>
                        ))}
                      </div>

                      {/* Chart area */}
                      <div className="ml-10 h-full relative">
                        <svg className="w-full h-full" viewBox="0 0 300 200" preserveAspectRatio="none">
                          {/* Enhanced gradient */}
                          <defs>
                            <linearGradient id={`area-gradient-${idx}`} x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                              <stop offset="50%" stopColor="rgb(96, 165, 250)" stopOpacity="0.15" />
                              <stop offset="100%" stopColor="rgb(147, 197, 253)" stopOpacity="0.05" />
                            </linearGradient>

                            {/* Shadow gradient */}
                            <filter id={`shadow-${idx}`}>
                              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                              <feOffset dx="0" dy="2" result="offsetblur" />
                              <feComponentTransfer>
                                <feFuncA type="linear" slope="0.3" />
                              </feComponentTransfer>
                              <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                          </defs>

                          {/* Smooth area fill using quadratic curves */}
                          <path
                            d={`M 0 ${200 - ((package_data.values[0].value - minValue) / (maxValue - minValue) * 170)}
                               Q 75 ${200 - ((package_data.values[1].value - minValue) / (maxValue - minValue) * 170)}, 150 ${200 - ((package_data.values[1].value - minValue) / (maxValue - minValue) * 170)}
                               T 300 ${200 - ((package_data.values[2].value - minValue) / (maxValue - minValue) * 170)}
                               L 300 200 L 0 200 Z`}
                            fill={`url(#area-gradient-${idx})`}
                          />

                          {/* Smooth line with shadow */}
                          <path
                            d={`M 0 ${200 - ((package_data.values[0].value - minValue) / (maxValue - minValue) * 170)}
                               Q 75 ${200 - ((package_data.values[1].value - minValue) / (maxValue - minValue) * 170)}, 150 ${200 - ((package_data.values[1].value - minValue) / (maxValue - minValue) * 170)}
                               T 300 ${200 - ((package_data.values[2].value - minValue) / (maxValue - minValue) * 170)}`}
                            fill="none"
                            stroke="rgb(59, 130, 246)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            filter={`url(#shadow-${idx})`}
                          />

                          {/* Enhanced data points */}
                          {package_data.values.map((val, i) => (
                            <g key={i}>
                              {/* Outer glow circle */}
                              <circle
                                cx={i * 150}
                                cy={200 - ((val.value - minValue) / (maxValue - minValue) * 170)}
                                r="8"
                                fill="rgb(59, 130, 246)"
                                opacity="0.2"
                              />
                              {/* Main point */}
                              <circle
                                cx={i * 150}
                                cy={200 - ((val.value - minValue) / (maxValue - minValue) * 170)}
                                r="5"
                                fill="white"
                                stroke="rgb(59, 130, 246)"
                                strokeWidth="3"
                              />
                            </g>
                          ))}
                        </svg>

                        {/* Value labels above points */}
                        <div className="absolute inset-0 flex items-start justify-between pointer-events-none">
                          {package_data.values.map((val, i) => (
                            <div
                              key={i}
                              className="flex flex-col items-center"
                              style={{
                                marginTop: `${200 - ((val.value - minValue) / (maxValue - minValue) * 170) - 30}px`,
                                marginLeft: i === 0 ? '-15px' : i === 1 ? '-15px' : '-30px'
                              }}
                            >
                              <div className="bg-blue-500 text-white px-2 py-1 rounded-md shadow-lg">
                                <span className="text-xs font-bold">{val.value}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* X-axis labels */}
                      <div className="flex justify-between mt-1 ml-10">
                        {package_data.values.map((val, i) => (
                          <span key={i} className="text-xs text-slate-600 font-medium">{val.year}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Dream Offers Section */}
      <section id="DreamOffers" className="w-full min-h-screen flex items-center py-20 px-8 md:px-28 bg-slate-900 scroll-mt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">Dream Offers</h2>
            <div className="w-full h-px bg-slate-700 mx-auto"></div>
          </div>

          {/* Sliding Animation */}
          <div className="relative overflow-hidden py-12">
            <style>{`
              @keyframes scroll-dream-offers {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .dream-offers-slider {
                display: flex;
                animation: scroll-dream-offers 40s linear infinite;
                width: fit-content;
              }
              .dream-offers-slider:hover {
                animation-play-state: paused;
              }
              .dream-offer-card {
                flex: 0 0 auto;
                width: calc(100vw - 64px);
                max-width: 380px;
                margin: 0 12px;
              }
              @media (min-width: 768px) {
                .dream-offer-card {
                  margin: 0 20px;
                }
              }
            `}</style>

            <div className="dream-offers-slider">
              {/* Duplicate the array for seamless loop */}
              {[
                { company: 'Infosys', salary: '9.5 LPA', students: 6, batch: '2024-25', logo: '/images/companies/Infosys_logo.png' },
                { company: 'TCS', salary: '9 LPA', students: 2, batch: '2024-25', logo: '/images/companies/TCS_logo.png' },
                { company: 'Cognizant', salary: '8.28 LPA', students: 14, batch: '2024-25', logo: '/images/companies/Cognizant_logo.png' },
                { company: 'Evergent', salary: '7.65 LPA', students: 11, batch: '2024-25', logo: '/images/companies/evergent.png' },
                { company: 'Amazon', salary: '44 LPA', students: 35, batch: '2021-23', logo: '/images/companies/Amazon_logo.webp' },
                { company: 'Microsoft', salary: '49.12 LPA', students: 3, batch: '2022-24', logo: '/images/companies/microsoft.webp' },
                { company: 'Deloitte', salary: '52 LPA', students: 2, batch: '2023-24', logo: '/images/companies/Deloitte_logo.png' },
                { company: 'Accenture', salary: '59.91 LPA', students: 1, batch: '2024', logo: '/images/companies/Accenture_logo.png' },
                { company: 'Infosys', salary: '9.5 LPA', students: 6, batch: '2024-25', logo: '/images/companies/Infosys_logo.png' },
                { company: 'TCS', salary: '9 LPA', students: 2, batch: '2024-25', logo: '/images/companies/TCS_logo.png' },
                { company: 'Cognizant', salary: '8.28 LPA', students: 14, batch: '2024-25', logo: '/images/companies/Cognizant_logo.png' },
                { company: 'Evergent', salary: '7.65 LPA', students: 11, batch: '2024-25', logo: '/images/companies/evergent.png' },
                { company: 'Amazon', salary: '44 LPA', students: 35, batch: '2021-23', logo: '/images/companies/Amazon_logo.webp' },
                { company: 'Microsoft', salary: '49.12 LPA', students: 3, batch: '2022-24', logo: '/images/companies/microsoft.webp' },
                { company: 'Deloitte', salary: '52 LPA', students: 2, batch: '2023-24', logo: '/images/companies/Deloitte_logo.png' },
                { company: 'Accenture', salary: '59.91 LPA', students: 1, batch: '2024', logo: '/images/companies/Accenture_logo.png' },
              ].map((offer, index) => (
                <div key={index} className="dream-offer-card">
                  <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-700">
                    {/* Company Logo Area */}
                    <div className="relative h-56 bg-white flex items-center justify-center p-10">
                      <img
                        src={offer.logo}
                        alt={offer.company}
                        className="max-w-full max-h-32 object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Details Footer - Switched to Blue Theme */}
                    <div className="p-5 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
                      <h3 className="text-2xl font-black mb-1">{offer.salary}</h3>
                      <div className="flex justify-between items-center mt-2 pt-2 border-t border-white/10">
                        <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">Batch {offer.batch}</span>
                        <span className="text-[10px] uppercase font-bold tracking-wider">{offer.students} Student{offer.students > 1 ? 's' : ''}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info Text */}
          <div className="text-center mt-12">
            <p className="text-slate-500 text-sm font-medium tracking-widest uppercase">
              Hover to pause | Scroll to explore
            </p>
          </div>
        </div>
      </section>

      {/* Top Internships Section */}
      <section id="Internships" className="w-full min-h-screen flex items-center py-24 px-8 md:px-28 bg-white relative overflow-hidden scroll-mt-24">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
            <div className="relative">
              <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2 block">Our Proud Interns</span>
              <h2 className="text-slate-800 text-4xl md:text-5xl font-bold">Top Internships</h2>
              <div className="w-20 h-1.5 bg-blue-600 mt-4 rounded-full"></div>
            </div>
            <p className="text-slate-500 text-sm md:text-base max-w-md leading-relaxed">
              Celebrating our students who secured prestigious internships at global tech giants and industry leaders.
            </p>
          </div>

          {/* Stepped Animation Carousel */}
          <div className="relative overflow-hidden py-4">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentInternship * (100 / (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 4))}%)` }}
            >
              {internshipData.map((intern, index) => (
                <div key={index} className="flex-shrink-0 w-full md:w-1/4 px-4">
                  <div className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] border border-slate-100 h-full">
                    {/* Top Accent Line */}
                    <div className="h-1.5 w-full bg-slate-100 group-hover:bg-blue-600 transition-colors duration-500"></div>

                    {/* Logo Body */}
                    <div className="h-44 flex flex-col items-center justify-center p-8 bg-white">
                      <img
                        src={intern.logo}
                        alt={intern.company}
                        className="max-w-full max-h-24 object-contain group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                      />
                      <p className="mt-4 text-[11px] font-bold text-slate-400 uppercase tracking-tighter group-hover:text-blue-600 transition-colors text-center">
                        {intern.company}
                      </p>
                    </div>

                    {/* Footer - Student Count */}
                    <div className="bg-slate-900 group-hover:bg-blue-600 py-4 text-center transition-colors duration-500 relative overflow-hidden">
                      <div className="relative z-10 flex items-center justify-center gap-2">
                        <span className="text-white text-2xl font-black">{intern.count}</span>
                        <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Student{intern.count > 1 ? 's' : ''}</span>
                      </div>
                      {/* Decorative Background Element */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-x-[-20%] -translate-y-[50%]"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation/Indicators */}
          <div className="flex justify-center mt-12 gap-4">
            <button
              onClick={() => setCurrentInternship((prev) => (prev > 0 ? prev - 1 : internshipData.length - (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 4)))}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={() => setCurrentInternship((prev) => (prev < internshipData.length - (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 4) ? prev + 1 : 0))}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Placement Highlights Section */}
      <section id="Highlights" className="w-full py-20 px-6 md:px-28 bg-gradient-to-br from-slate-50 to-blue-50/50 scroll-mt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-10 md:mb-12 text-center md:text-left">
            <h2 className="text-slate-800 text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">Placement Highlights</h2>
            <div className="w-full h-px bg-slate-300"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {placementHighlights.map((student, index) => (
              <div key={index} className="bg-white rounded-sm overflow-hidden flex shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100">
                {/* Info Container */}
                <div className="flex-1 p-5 md:p-6 flex flex-col justify-center">
                  <h3 className="text-blue-800 font-extrabold text-base md:text-lg mb-1 md:mb-2 leading-tight uppercase tracking-tight">{student.name}</h3>
                  <div className="space-y-1">
                    <p className="text-slate-900 font-bold text-xs md:text-sm tracking-wide">{student.package}</p>
                    <p className="text-slate-600 text-[10px] md:text-xs font-semibold leading-relaxed">{student.company}</p>
                    <p className="text-slate-400 text-[9px] md:text-[10px] font-bold tracking-widest uppercase mt-0.5 md:mt-1">{student.year}</p>
                  </div>
                </div>
                {/* Image Container */}
                <div className="w-28 md:w-32 h-40 md:h-44 flex-shrink-0 relative overflow-hidden bg-slate-100">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-500/5 mix-blend-multiply"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Glimpses 2024 - Compact Viewport Fit Grid */}
      <section id="Glimpses" className="w-full bg-[#050505] overflow-hidden lg:h-[calc(100vh-80px)] flex items-center scroll-mt-24">
        <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row w-full h-full">
          {/* Left Title Area - Fixed width to ensure no clipping */}
          <div className="lg:w-[420px] p-8 md:p-12 flex items-center bg-[#050505] relative shrink-0">
            <h2 className="text-white text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
              Placement <br />
              Glimpses <br />
              2024
            </h2>
          </div>

          {/* Right Grid Area */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 border-t border-black lg:border-t-0 lg:border-l-[3px] border-black">
            {/* Row 1 */}
            <div className="md:col-span-8 bg-white p-6 md:p-10 flex flex-col justify-center border-b-[3px] border-r-0 md:border-r-[3px] border-black min-h-[160px] md:min-h-0">
              <h3 className="text-5xl md:text-7xl font-black text-blue-900 leading-none mb-2 tracking-tighter">1155</h3>
              <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.2em] leading-tight">No. of Placements</p>
            </div>
            <div className="md:col-span-4 bg-white p-6 md:p-10 flex flex-col justify-center border-b-[3px] border-black min-h-[160px] md:min-h-0">
              <h3 className="text-4xl md:text-6xl font-black text-blue-900 leading-none mb-2 tracking-tighter">59.91 LPA</h3>
              <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.2em] leading-tight">Highest Salary Package</p>
            </div>

            {/* Row 2 */}
            <div className="md:col-span-4 bg-white p-6 md:p-10 flex flex-col justify-center border-b-[3px] border-r-0 md:border-r-[3px] border-black min-h-[160px] md:min-h-0">
              <h3 className="text-4xl md:text-6xl font-black text-blue-900 leading-none mb-2 tracking-tighter">565</h3>
              <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.2em] leading-tight">Total Company Visited</p>
            </div>
            <div className="md:col-span-4 bg-[#0a0a0a] p-6 md:p-10 flex flex-col justify-center border-b-[3px] border-r-0 md:border-r-[3px] border-black min-h-[160px] md:min-h-0 text-white">
              <h3 className="text-4xl md:text-6xl font-black leading-none mb-2 tracking-tighter text-white">78.57%</h3>
              <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] leading-tight opacity-80">Placement %</p>
            </div>
            <div className="md:col-span-4 bg-white p-6 md:p-10 flex flex-col justify-center border-b-[3px] border-black min-h-[160px] md:min-h-0">
              <h3 className="text-4xl md:text-6xl font-black text-blue-900 leading-none mb-2 tracking-tighter">1683</h3>
              <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.2em] leading-tight">No. of Placement Offered</p>
            </div>

            {/* Row 3 */}
            <div className="md:col-span-5 bg-white p-6 md:p-10 flex flex-col justify-center border-b-[3px] md:border-b-0 border-r-0 md:border-r-[3px] border-black min-h-[160px] md:min-h-0">
              <h3 className="text-4xl md:text-6xl font-black text-blue-900 leading-none mb-3 tracking-tighter">190</h3>
              <div className="space-y-1">
                <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.15em] leading-tight">Dream Offers</p>
                <p className="text-[9px] md:text-[10px] font-bold text-slate-500 leading-tight">((CTC Between &lt;= 9.99 LPA &amp; &gt;= 7.00 LPA))</p>
              </div>
            </div>
            <div className="md:col-span-3 bg-white p-6 md:p-10 flex flex-col justify-center border-b-[3px] md:border-b-0 border-r-0 md:border-r-[3px] border-black min-h-[160px] md:min-h-0">
              <h3 className="text-4xl md:text-5xl font-black text-blue-900 leading-none mb-3 tracking-tighter">60</h3>
              <div className="space-y-1">
                <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.15em] leading-tight">Super Dream Offers</p>
                <p className="text-[9px] md:text-[10px] font-bold text-slate-500 leading-tight">(CTC &gt;= 10 LPA)</p>
              </div>
            </div>
            <div className="md:col-span-4 bg-white p-6 md:p-10 flex flex-col justify-center min-h-[160px] md:min-h-0">
              <h3 className="text-4xl md:text-5xl font-black text-blue-900 leading-none mb-3 tracking-tighter">239</h3>
              <div className="space-y-1">
                <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.15em] leading-tight">Super Offers</p>
                <p className="text-[9px] md:text-[10px] font-bold text-slate-500 leading-tight">(CTC Between &lt;= 6.99 LPA &amp; &gt;= 5.00 LPA)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2024 Batch Placement Data Section */}
      <section id="PlacementData" className="w-full py-16 md:py-20 px-6 md:px-28 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10 md:mb-12 text-center">
            <h2 className="text-slate-800 text-3xl md:text-5xl font-bold leading-tight mb-4">
              2024 Batch Placements
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto">
              Complete placement records for CSE Department - Batch 2024 (2021-25)
            </p>
            <div className="w-32 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Statistics Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">258</p>
              <p className="text-sm text-slate-600 font-medium">Total Students</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center">
              <p className="text-3xl md:text-4xl font-bold text-green-600 mb-2">181</p>
              <p className="text-sm text-slate-600 font-medium">Students Placed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center">
              <p className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">61.99%</p>
              <p className="text-sm text-slate-600 font-medium">Placement Rate</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center">
              <p className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">161</p>
              <p className="text-sm text-slate-600 font-medium">Total Offers</p>
            </div>
          </div>

          {/* Placement Data Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <tr>
                    <th className="px-4 py-4 text-left text-xs md:text-sm font-bold uppercase tracking-wider">S.No</th>
                    <th className="px-4 py-4 text-left text-xs md:text-sm font-bold uppercase tracking-wider">Roll No</th>
                    <th className="px-4 py-4 text-left text-xs md:text-sm font-bold uppercase tracking-wider">Name</th>
                    <th className="px-4 py-4 text-left text-xs md:text-sm font-bold uppercase tracking-wider">Company Offers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {(() => {
                    const indexOfLastStudent = currentPage * studentsPerPage;
                    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
                    const currentStudents = placementData2024.slice(indexOfFirstStudent, indexOfLastStudent);

                    return currentStudents.map((student, index) => (
                      <tr
                        key={student.sno}
                        className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-blue-50 transition-colors duration-150`}
                      >
                        <td className="px-4 py-3 text-sm text-slate-900 font-medium">{student.sno}</td>
                        <td className="px-4 py-3 text-sm text-slate-700 font-mono">{student.rno}</td>
                        <td className="px-4 py-3 text-sm text-slate-900 font-semibold">{student.name}</td>
                        <td className="px-4 py-3 text-sm text-slate-700">{student.offers}</td>
                      </tr>
                    ));
                  })()}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-600">
              Showing {((currentPage - 1) * studentsPerPage) + 1} to {Math.min(currentPage * studentsPerPage, placementData2024.length)} of {placementData2024.length} students
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${currentPage === 1
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                  }`}
              >
                Previous
              </button>

              <div className="flex items-center gap-2">
                {(() => {
                  const totalPages = Math.ceil(placementData2024.length / studentsPerPage);
                  const pages = [];

                  for (let i = 1; i <= totalPages; i++) {
                    if (
                      i === 1 ||
                      i === totalPages ||
                      (i >= currentPage - 1 && i <= currentPage + 1)
                    ) {
                      pages.push(
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i)}
                          className={`w-10 h-10 rounded-lg font-semibold text-sm transition-all duration-200 ${currentPage === i
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                        >
                          {i}
                        </button>
                      );
                    } else if (i === currentPage - 2 || i === currentPage + 2) {
                      pages.push(<span key={i} className="text-slate-400">...</span>);
                    }
                  }

                  return pages;
                })()}
              </div>

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(placementData2024.length / studentsPerPage)))}
                disabled={currentPage === Math.ceil(placementData2024.length / studentsPerPage)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${currentPage === Math.ceil(placementData2024.length / studentsPerPage)
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                  }`}
              >
                Next
              </button>
            </div>
          </div>

          {/* Note */}
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm italic">
              * 2025 Placement data will be updated soon
            </p>
          </div>
        </div>
      </section>

      {/* Message from Dean Section */}
      <section className="w-full min-h-screen flex items-center py-16 md:py-20 px-6 md:px-28 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="mb-10 md:mb-12">
            <h2 className="text-slate-800 text-3xl md:text-5xl font-bold leading-tight">Message from HoD <br className="md:hidden" />(Department of CSE)</h2>
            <div className="w-full h-px bg-slate-200 mt-4 md:mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start mb-12">
            {/* Dean Image */}
            <div className="lg:col-span-3 max-w-[280px] mx-auto lg:mx-0">
              <div className="shadow-xl rounded-sm overflow-hidden border border-slate-100">
                <img
                  src="/COEFaculty/madhubabu.jpeg"
                  alt="Dr. Ch. Madhu Babu"
                  className="w-full h-auto object-cover"
                  style={{ transform: 'none' }}
                />
              </div>
            </div>

            {/* Quote Area */}
            <div className="lg:col-span-9 flex flex-col justify-center pt-4 md:pt-8">
              <div className="relative">
                {/* Visual Quote Icon */}
                <FaQuoteLeft className="mb-6 text-blue-900/60 text-2xl md:text-4xl" />

                <h3 className="text-xl md:text-3xl font-bold text-slate-800 leading-snug mb-8 relative z-10 px-2 lg:px-0">
                  Our goal is not merely to produce graduates, but to nurture competent engineers who can think critically, innovate responsibly, and lead confidently in a rapidly evolving technological world.
                </h3>

                <div className="px-2 lg:px-0">
                  <p className="text-blue-700 font-bold text-base md:text-lg">
                    Dr. Ch. Madhu Babu, <br className="md:hidden" />
                    <span className="text-slate-600 font-semibold">HOD (Department of CSE)</span>
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Detailed Message Footer */}
          <div className="mt-12 md:mt-16">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed text-left border-t border-slate-100 pt-8 px-2 lg:px-0">
              At BVRIT Narsapur, the Department of Computer Science & Engineering is committed to shaping industry-ready professionals with strong technical foundations, ethical values, and a mindset for continuous learning. Through academic rigor, hands-on practice, and industry-focused training, we prepare students to confidently meet real-world challenges confirm. Beyond placements, we guide our students towards leadership, innovation, and long-term career success.
            </p>
          </div>
        </div>
      </section >
      <Footer />
    </div >
  );
};

export default Placements;
