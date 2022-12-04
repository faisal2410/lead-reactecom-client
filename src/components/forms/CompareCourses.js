import React from 'react';
import axios from "axios";
import { useCart } from "../../context/cart";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const CompareCourses=()=> {
  // hooks
  const [cart, setCart] = useCart();
 
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
    },
    author: {
      fontSize: 12,
      textAlign: "center",
      marginBottom: 40,
    },
    subtitle: {
      fontSize: 18,
      margin: 12,
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
      color: "grey",
    },
    footer: {
      padding: "100px",
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
      color: "grey",
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
  });

  return (<div className="container-fluid">
  <div className="row">
  <div className="col-md-12" ref={ref}>
<table className="table table-sm table-dark">
<caption><h4 className="fw-bold">Subjects Comparison</h4></caption> 

  <thead>
  <tr>
      <th scope="col">#</th>
      <th scope="col">Course One</th>
      <th scope="col">Course Two</th>
      <th scope="col">Course Three</th>
      <th scope="col">Course Four</th>
      <th scope="col">Course Five</th>
    </tr>
  </thead>
  <tbody>
    <tr>
           <th scope="row">Program Name</th>
           <td>{cart[0]?.title}</td> 
           <td>{cart[1]?.title}</td> 
           <td>{cart[2]?.title}</td> 
           <td>{cart[3]?.title}</td> 
           <td>{cart[4]?.title}</td>           
    </tr>
    <tr>
        <th scope="row">University Name</th>
           <td>{cart[0]?.university}</td>
           <td>{cart[1]?.university}</td>
           <td>{cart[2]?.university}</td>
           <td>{cart[3]?.university}</td>
           <td>{cart[4]?.university}</td>
        
      </tr>
    <tr>
        <th scope="row">Yearly Tuition Fees</th>
           <td>{cart[0]?.yearlyTuitionFees}</td>
           <td>{cart[1]?.yearlyTuitionFees}</td>
           <td>{cart[2]?.yearlyTuitionFees}</td>
           <td>{cart[3]?.yearlyTuitionFees}</td>
           <td>{cart[4]?.yearlyTuitionFees}</td>
        
      </tr>
    <tr>
        <th scope="row">Program Level</th>
           <td>{cart[0]?.programLevel}</td>
           <td>{cart[1]?.programLevel}</td>
           <td>{cart[2]?.programLevel}</td>
           <td>{cart[3]?.programLevel}</td>
           <td>{cart[4]?.programLevel}</td>
        
      </tr>
    <tr>
        <th scope="row">Intakes</th>
           <td>{cart[0]?.intakes}</td>
           <td>{cart[1]?.intakes}</td>
           <td>{cart[2]?.intakes}</td>
           <td>{cart[3]?.intakes}</td>
           <td>{cart[4]?.intakes}</td>
        
      </tr>
    <tr>
        <th scope="row">English Proficiency</th>
           <td>{cart[0]?.englishProficiency}</td>
           <td>{cart[1]?.englishProficiency}</td>
           <td>{cart[2]?.englishProficiency}</td>
           <td>{cart[3]?.englishProficiency}</td>
           <td>{cart[4]?.englishProficiency}</td>
        
      </tr>
      <tr>
        <th scope="row">Language Score</th>
           <td>{cart[0]?.languageScore}</td>
           <td>{cart[1]?.languageScore}</td>
           <td>{cart[2]?.languageScore}</td>
           <td>{cart[3]?.languageScore}</td>
           <td>{cart[4]?.languageScore}</td>
        
      </tr>
      <tr>
        <th scope="row">Application Deadline</th>
           <td>{cart[0]?.applicationDeadline}</td>
           <td>{cart[1]?.applicationDeadline}</td>
           <td>{cart[2]?.applicationDeadline}</td>
           <td>{cart[3]?.applicationDeadline}</td>
           <td>{cart[4]?.applicationDeadline}</td>
        
      </tr>
    <tr>
        <th scope="row">Course Duration</th>
           <td>{cart[0]?.duration}</td>
           <td>{cart[1]?.duration}</td>
           <td>{cart[2]?.duration}</td>
           <td>{cart[3]?.duration}</td>
           <td>{cart[4]?.duration}</td>
        
      </tr>
  
    <tr>
        <th scope="row">Entry Requirement</th>
           <td>{cart[0]?.entryRequirement}</td>
           <td>{cart[1]?.entryRequirement}</td>
           <td>{cart[2]?.entryRequirement}</td>
           <td>{cart[3]?.entryRequirement}</td>
           <td>{cart[4]?.entryRequirement}</td>
        
      </tr>
  
    <tr>
        <th scope="row">Application Fees</th>
           <td>{cart[0]?.applicationFees}</td>
           <td>{cart[1]?.applicationFees}</td>
           <td>{cart[2]?.applicationFees}</td>
           <td>{cart[3]?.applicationFees}</td>
           <td>{cart[4]?.applicationFees}</td>
        
      </tr>
    <tr>
        <th scope="row">Study Area</th>
           <td>{cart[0]?.studyArea}</td>
           <td>{cart[1]?.studyArea}</td>
           <td>{cart[2]?.studyArea}</td>
           <td>{cart[3]?.studyArea}</td>
           <td>{cart[4]?.studyArea}</td>
        
      </tr>
    <tr>
        <th scope="row">Standardized Test</th>
           <td>{cart[0]?.standardizedTest}</td>
           <td>{cart[1]?.standardizedTest}</td>
           <td>{cart[2]?.standardizedTest}</td>
           <td>{cart[3]?.standardizedTest}</td>
           <td>{cart[4]?.standardizedTest}</td>
        
      </tr>
  
   
    <tr>
        <th scope="row">Country</th>
           <td>{cart[0]?.country}</td>
           <td>{cart[1]?.country}</td>
           <td>{cart[2]?.country}</td>
           <td>{cart[3]?.country}</td>
           <td>{cart[4]?.country}</td>
        
      </tr>
    <tr>
        <th scope="row">Campus</th>
           <td>{cart[0]?.campus}</td>
           <td>{cart[1]?.campus}</td>
           <td>{cart[2]?.campus}</td>
           <td>{cart[3]?.campus}</td>
           <td>{cart[4]?.campus}</td>
        
      </tr>
    <tr>
        <th scope="row">Subject URL</th>
           <td>{cart[0]?.subjectUrl}</td>
           <td>{cart[1]?.subjectUrl}</td>
           <td>{cart[2]?.subjectUrl}</td>
           <td>{cart[3]?.subjectUrl}</td>
           <td>{cart[4]?.subjectUrl}</td>
        
      </tr>
    <tr>
        <th scope="row">University Website</th>
           <td>{cart[0]?.webUrl}</td>
           <td>{cart[1]?.webUrl}</td>
           <td>{cart[2]?.webUrl}</td>
           <td>{cart[3]?.webUrl}</td>
           <td>{cart[4]?.webUrl}</td>
        
      </tr>
    <tr>
        <th scope="row">University Address</th>
           <td>{cart[0]?.address}</td>
           <td>{cart[1]?.address}</td>
           <td>{cart[2]?.address}</td>
           <td>{cart[3]?.address}</td>
           <td>{cart[4]?.address}</td>
        
      </tr>
    <tr>
        <th scope="row">Remarks</th>
           <td>{cart[0]?.remarks}</td>
           <td>{cart[1]?.remarks}</td>
           <td>{cart[2]?.remarks}</td>
           <td>{cart[3]?.remarks}</td>
           <td>{cart[4]?.remarks}</td>
        
      </tr>
  </tbody>
 
 
</table>

              {/* <PDFDownloadLink fileName="subjects-comparison.pdf" className="btn btn-primary" document={
<Document>
       
        <Page style={styles.body}>
      <Text style={styles.header} fixed>
        ~ {new Date().toLocaleString()} ~
      </Text>
      <Text style={styles.title}>Subjects Comparison Information</Text>
      <Text style={styles.title}>HF Consultancy</Text>
      <Text style={styles.subtitle}>Your dream is our mission</Text>

      <Text style={styles.title} >Course One</Text>
      <Text style={styles.subtitle}>Title:{cart[0]?.title}</Text>
      <Text style={styles.subtitle}>University Name :{cart[0]?.university}</Text>
      <Text style={styles.subtitle}>Campus :{cart[0]?.campus}</Text>
      <Text style={styles.subtitle}>Yearly Tuition Fees :{cart[0]?.yearlyTuitionFees}</Text>
      <Text style={styles.subtitle}>Program Level :{cart[0]?.programLevel}</Text>
      <Text style={styles.subtitle}>English Proficiency :{cart[0]?.englishProficiency}</Text>
     
      <Text style={styles.subtitle}>Language Score :{cart[0]?.languageScore}</Text>
      <Text style={styles.subtitle}>Intakes :{cart[0]?.intakes}</Text>
      <Text style={styles.subtitle}>Address :{cart[0]?.address}</Text>
      <Text style={styles.subtitle}>Web Url :{cart[0]?.webUrl}</Text>
      <Text style={styles.subtitle}>Subject Url :{cart[0]?.subjectUrl}</Text>
      <Text style={styles.subtitle}>Study Area :{cart[0]?.studyArea}</Text>
      <Text style={styles.subtitle}>Duration :{cart[0]?.duration}</Text>
      <Text style={styles.subtitle}>Entry Requirement :{cart[0]?.entryRequirement}</Text>
      <Text style={styles.subtitle}>Standardized Test:{cart[0]?.standardizedTest}</Text>
      <Text style={styles.subtitle}>Application Deadline:{cart[0]?.applicationDeadline}</Text>
      <Text style={styles.subtitle}>Application Fees:{cart[0]?.applicationFees}</Text>
      <Text style={styles.subtitle}>Remarks:{cart[0]?.remarks}</Text>

      <Text style={styles.title} >Course Two</Text>
      <Text style={styles.subtitle}>Title:{cart[1]?.title}</Text>
      <Text style={styles.subtitle}>University Name :{cart[1]?.university}</Text>
      <Text style={styles.subtitle}>Campus :{cart[1]?.campus}</Text>
      <Text style={styles.subtitle}>Yearly Tuition Fees :{cart[1]?.yearlyTuitionFees}</Text>
      <Text style={styles.subtitle}>Program Level :{cart[1]?.programLevel}</Text>
      <Text style={styles.subtitle}>English Proficiency :{cart[1]?.englishProficiency}</Text>
     
      <Text style={styles.subtitle}>Language Score :{cart[1]?.languageScore}</Text>
      <Text style={styles.subtitle}>Intakes :{cart[1]?.intakes}</Text>
      <Text style={styles.subtitle}>Address :{cart[1]?.address}</Text>
      <Text style={styles.subtitle}>Web Url :{cart[1]?.webUrl}</Text>
      <Text style={styles.subtitle}>Subject Url :{cart[1]?.subjectUrl}</Text>
      <Text style={styles.subtitle}>Study Area :{cart[1]?.studyArea}</Text>
      <Text style={styles.subtitle}>Duration :{cart[1]?.duration}</Text>
      <Text style={styles.subtitle}>Entry Requirement :{cart[1]?.entryRequirement}</Text>
      <Text style={styles.subtitle}>Standardized Test:{cart[1]?.standardizedTest}</Text>
      <Text style={styles.subtitle}>Application Deadline:{cart[1]?.applicationDeadline}</Text>
      <Text style={styles.subtitle}>Application Fees:{cart[1]?.applicationFees}</Text>
      <Text style={styles.subtitle}>Remarks:{cart[1]?.remarks}</Text>

      <Text style={styles.title} >Course Three</Text>
      <Text style={styles.subtitle}>Title:{cart[2]?.title}</Text>
      <Text style={styles.subtitle}>University Name :{cart[2]?.university}</Text>
      <Text style={styles.subtitle}>Campus :{cart[2]?.campus}</Text>
      <Text style={styles.subtitle}>Yearly Tuition Fees :{cart[2]?.yearlyTuitionFees}</Text>
      <Text style={styles.subtitle}>Program Level :{cart[2]?.programLevel}</Text>
      <Text style={styles.subtitle}>English Proficiency :{cart[2]?.englishProficiency}</Text>
     
      <Text style={styles.subtitle}>Language Score :{cart[2]?.languageScore}</Text>
      <Text style={styles.subtitle}>Intakes :{cart[2]?.intakes}</Text>
      <Text style={styles.subtitle}>Address :{cart[2]?.address}</Text>
      <Text style={styles.subtitle}>Web Url :{cart[2]?.webUrl}</Text>
      <Text style={styles.subtitle}>Subject Url :{cart[2]?.subjectUrl}</Text>
      <Text style={styles.subtitle}>Study Area :{cart[2]?.studyArea}</Text>
      <Text style={styles.subtitle}>Duration :{cart[2]?.duration}</Text>
      <Text style={styles.subtitle}>Entry Requirement :{cart[2]?.entryRequirement}</Text>
      <Text style={styles.subtitle}>Standardized Test:{cart[2]?.standardizedTest}</Text>
      <Text style={styles.subtitle}>Application Deadline:{cart[2]?.applicationDeadline}</Text>
      <Text style={styles.subtitle}>Application Fees:{cart[2]?.applicationFees}</Text>
      <Text style={styles.subtitle}>Remarks:{cart[2]?.remarks}</Text>
     
      <Text style={styles.title} >Course Four</Text>
      <Text style={styles.subtitle}>Title:{cart[3]?.title}</Text>
      <Text style={styles.subtitle}>University Name :{cart[3]?.university}</Text>
      <Text style={styles.subtitle}>Campus :{cart[3]?.campus}</Text>
      <Text style={styles.subtitle}>Yearly Tuition Fees :{cart[3]?.yearlyTuitionFees}</Text>
      <Text style={styles.subtitle}>Program Level :{cart[3]?.programLevel}</Text>
      <Text style={styles.subtitle}>English Proficiency :{cart[3]?.englishProficiency}</Text>
     
      <Text style={styles.subtitle}>Language Score :{cart[3]?.languageScore}</Text>
      <Text style={styles.subtitle}>Intakes :{cart[3]?.intakes}</Text>
      <Text style={styles.subtitle}>Address :{cart[3]?.address}</Text>
      <Text style={styles.subtitle}>Web Url :{cart[3]?.webUrl}</Text>
      <Text style={styles.subtitle}>Subject Url :{cart[3]?.subjectUrl}</Text>
      <Text style={styles.subtitle}>Study Area :{cart[3]?.studyArea}</Text>
      <Text style={styles.subtitle}>Duration :{cart[3]?.duration}</Text>
      <Text style={styles.subtitle}>Entry Requirement :{cart[3]?.entryRequirement}</Text>
      <Text style={styles.subtitle}>Standardized Test:{cart[3]?.standardizedTest}</Text>
      <Text style={styles.subtitle}>Application Deadline:{cart[3]?.applicationDeadline}</Text>
      <Text style={styles.subtitle}>Application Fees:{cart[3]?.applicationFees}</Text>
      <Text style={styles.subtitle}>Remarks:{cart[3]?.remarks}</Text>
      <Text style={styles.title} >Course Five</Text>
      <Text style={styles.subtitle}>Title:{cart[4]?.title}</Text>
      <Text style={styles.subtitle}>University Name :{cart[4]?.university}</Text>
      <Text style={styles.subtitle}>Campus :{cart[4]?.campus}</Text>
      <Text style={styles.subtitle}>Yearly Tuition Fees :{cart[4]?.yearlyTuitionFees}</Text>
      <Text style={styles.subtitle}>Program Level :{cart[4]?.programLevel}</Text>
      <Text style={styles.subtitle}>English Proficiency :{cart[4]?.englishProficiency}</Text>
     
      <Text style={styles.subtitle}>Language Score :{cart[4]?.languageScore}</Text>
      <Text style={styles.subtitle}>Intakes :{cart[4]?.intakes}</Text>
      <Text style={styles.subtitle}>Address :{cart[4]?.address}</Text>
      <Text style={styles.subtitle}>Web Url :{cart[4]?.webUrl}</Text>
      <Text style={styles.subtitle}>Subject Url :{cart[4]?.subjectUrl}</Text>
      <Text style={styles.subtitle}>Study Area :{cart[4]?.studyArea}</Text>
      <Text style={styles.subtitle}>Duration :{cart[4]?.duration}</Text>
      <Text style={styles.subtitle}>Entry Requirement :{cart[4]?.entryRequirement}</Text>
      <Text style={styles.subtitle}>Standardized Test:{cart[4]?.standardizedTest}</Text>
      <Text style={styles.subtitle}>Application Deadline:{cart[4]?.applicationDeadline}</Text>
      <Text style={styles.subtitle}>Application Fees:{cart[4]?.applicationFees}</Text>
      <Text style={styles.subtitle}>Remarks:{cart[4]?.remarks}</Text>
     


    
      <Text style={styles.footer}> ~ Thank you for being with us ~ </Text>
    </Page>

      </Document>
    }>Download Compared Subjects information in PDF</PDFDownloadLink> */}
 
</div>
<Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
  </div>
  </div>

)}




export default CompareCourses;
