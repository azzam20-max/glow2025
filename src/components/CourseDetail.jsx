import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./CourseDetail.css";

const courseData = [
   {
     slug: "cloud-computing",
     title: "Cloud Computing",
     department: "Telecommunication Engineering",
     description:
       "This course introduces cloud infrastructure, services (IaaS, PaaS, SaaS), virtualization, and practical implementations such as AWS, Azure, and GCP.",
     image: "/img/cloud-server.png",
     schedules: [
       {
         label: "Telecommunication Engineering",
         excelEmbed:
           "https://telkomuniversityofficial-my.sharepoint.com/personal/icao_telkomuniversity_ac_id/_layouts/15/Doc.aspx?sourcedoc={82b4b9a5-7b75-40f4-91f3-10f196cca936}&action=embedview&wdAllowInteractivity=False&ActiveCell='CC%20-%20Telecommunication%20Eng.'!I8&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True",
         excelLink:
           "https://telkomuniversityofficial-my.sharepoint.com/:x:/g/personal/icao_telkomuniversity_ac_id/EaW5tIJ1e_RAkfMQ8ZbMqTYBTEFcXb2NHFwieR0y9SIINw?e=vHryPl&nav=MTVfezA0NUVFRDZDLTVCNTAtNDE5RC05Qzg2LUMzNDE5MUU2QzYyQn0",
        imagePreview: "/img/schedule/schedule-preview-telco.png"
       }
     ]
   },
   {
     slug: "organizational-behavior",
     title: "Organizational Behavior",
     department: "Industrial Engineering, ICT Business, Accounting",
     description:
       "Explore how individuals and groups interact within organizations, and how this impacts performance, culture, and leadership effectiveness.",
     image: "/img/hierarchy.png",
     schedules: [
       {
         label: "Industrial Engineering",
         excelEmbed: "https://telkomuniversityofficial-my.sharepoint.com/personal/icao_telkomuniversity_ac_id/_layouts/15/Doc.aspx?sourcedoc={82b4b9a5-7b75-40f4-91f3-10f196cca936}&action=embedview&wdAllowInteractivity=False&ActiveCell='OB%20Schedule%20-%20Industrial%20Eng.'!I12&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True",
         excelLink: "https://telkomuniversityofficial-my.sharepoint.com/:x:/g/personal/icao_telkomuniversity_ac_id/EaW5tIJ1e_RAkfMQ8ZbMqTYBTEFcXb2NHFwieR0y9SIINw?e=AbJ0R5&nav=MTVfezM2NDJFOUM4LUQyRTUtNDJEQS1BQzY5LUM5NUFDOTQ3NEI2M30",
        imagePreview: "/img/schedule/schedule-preview-telco.png"
        },
       {
         label: "ICT Business",
         excelEmbed: "https://telkomuniversityofficial-my.sharepoint.com/personal/icao_telkomuniversity_ac_id/_layouts/15/Doc.aspx?sourcedoc={82b4b9a5-7b75-40f4-91f3-10f196cca936}&action=embedview&wdAllowInteractivity=False&ActiveCell='JADWAL%20OB%20Prodi%20ICT%20Business'!H13&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True",
         excelLink: "https://telkomuniversityofficial-my.sharepoint.com/:x:/g/personal/icao_telkomuniversity_ac_id/EaW5tIJ1e_RAkfMQ8ZbMqTYBTEFcXb2NHFwieR0y9SIINw?e=KRocTf&nav=MTVfezkyMEE5NzIzLTM3RUQtNDBGRS05MTBELTA5MDU3ODk2ODZFOX0"
       },
       {
         label: "Accounting",
         excelEmbed: "https://telkomuniversityofficial-my.sharepoint.com/personal/icao_telkomuniversity_ac_id/_layouts/15/Doc.aspx?sourcedoc={82b4b9a5-7b75-40f4-91f3-10f196cca936}&action=embedview&wdAllowInteractivity=False&ActiveCell='Jadwal%20OB%20Prodi%20Akuntansi'!M12&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True",
         excelLink: "https://telkomuniversityofficial-my.sharepoint.com/:x:/g/personal/icao_telkomuniversity_ac_id/EaW5tIJ1e_RAkfMQ8ZbMqTYBTEFcXb2NHFwieR0y9SIINw?e=MmVNyQ&nav=MTVfezU4NzI3RjI1LTRFQUUtNEVFNC1BQzY2LUMwMDkwMjc5N0VERX0"
       }
     ]
   },
   {
     slug: "artificial-intelligence",
     title: "Artificial Intelligence",
     department: "Informatics, Information System, Electrical Engineering",
     description:
       "Explore how individuals and groups interact within organizations, and how this impacts performance, culture, and leadership effectiveness.",
     image: "/img/artificial-intelligence.png",
     schedules: [
       {
         label: "Informatics",
         excelEmbed: "https://telkomuniversityofficial-my.sharepoint.com/personal/icao_telkomuniversity_ac_id/_layouts/15/Doc.aspx?sourcedoc={82b4b9a5-7b75-40f4-91f3-10f196cca936}&action=embedview&wdAllowInteractivity=False&ActiveCell='Jadwal%20AI%20Prodi%20Informatika'!L11&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True",
         excelLink: "https://telkomuniversityofficial-my.sharepoint.com/:x:/g/personal/icao_telkomuniversity_ac_id/EaW5tIJ1e_RAkfMQ8ZbMqTYBTEFcXb2NHFwieR0y9SIINw?e=VjhA3U&nav=MTVfezE1MUQ0MEFBLUY4NDgtNDZGMi05NEEyLUU3QUQwQzdDNTM2NH0"
       },
       {
         label: "Information System",
         excelEmbed: "https://telkomuniversityofficial-my.sharepoint.com/personal/icao_telkomuniversity_ac_id/_layouts/15/Doc.aspx?sourcedoc={82b4b9a5-7b75-40f4-91f3-10f196cca936}&action=embedview&wdAllowInteractivity=False&ActiveCell='Jadwal%20AI%20Prodi%20Sistem%20Informas'!I13&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True",
         excelLink: "https://telkomuniversityofficial-my.sharepoint.com/:x:/g/personal/icao_telkomuniversity_ac_id/EaW5tIJ1e_RAkfMQ8ZbMqTYBTEFcXb2NHFwieR0y9SIINw?e=ZYuV0Q&nav=MTVfezJCNjZCQjNFLTkyMDYtNDlGRS04NUQxLTg2RjlGMzMxMjdGNH0"
       },
       {
         label: "Electrical Engineering",
         excelEmbed: "https://telkomuniversityofficial-my.sharepoint.com/personal/icao_telkomuniversity_ac_id/_layouts/15/Doc.aspx?sourcedoc={82b4b9a5-7b75-40f4-91f3-10f196cca936}&action=embedview&wdAllowInteractivity=False&ActiveCell='Jadwal%20AI%20Prodi%20Teknik%20Elektro'!F27&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True",
         excelLink: "https://telkomuniversityofficial-my.sharepoint.com/:x:/g/personal/icao_telkomuniversity_ac_id/EaW5tIJ1e_RAkfMQ8ZbMqTYBTEFcXb2NHFwieR0y9SIINw?e=2N7Wsb&nav=MTVfe0IyQzZGQkJELThDMjYtNDJENS04RkVBLTMwMUM4ODBBRkQwNH0"
       }
     ]
   },
   {
     slug: "introduction-to-branding",
     title: "Introduction to Branding",
     department: "Visual Communication Design",
     description:
       "This course introduces cloud infrastructure, services (IaaS, PaaS, SaaS), virtualization, and practical implementations such as AWS, Azure, and GCP.",
     image: "/img/package.png",
     schedules: [
       {
         label: "Visual Communication Design",
         excelEmbed:
           "https://telkomuniversityofficial-my.sharepoint.com/personal/icao_telkomuniversity_ac_id/_layouts/15/Doc.aspx?sourcedoc={82b4b9a5-7b75-40f4-91f3-10f196cca936}&action=embedview&wdAllowInteractivity=False&ActiveCell='Jadwal%20ItB%20Prodi%20DKV%20'!I6&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True",
         excelLink:
           "https://telkomuniversityofficial-my.sharepoint.com/:x:/g/personal/icao_telkomuniversity_ac_id/EaW5tIJ1e_RAkfMQ8ZbMqTYBTEFcXb2NHFwieR0y9SIINw?e=IXzxXF&nav=MTVfe0UwRERCRjNCLTEwMDAtNDlDNC1CRkQwLUY5Mjg0Q0MxRDRERX0"
       }
     ]
   },
   {
     slug: "international-communication",
     title: "International Communication",
     department: "Communication Science",
     description:
       "This course introduces cloud infrastructure, services (IaaS, PaaS, SaaS), virtualization, and practical implementations such as AWS, Azure, and GCP.",
     image: "/img/podium.png",
     schedules: [
       {
         label: "Communication Science",
         excelEmbed:
           "https://telkomuniversityofficial-my.sharepoint.com/personal/icao_telkomuniversity_ac_id/_layouts/15/Doc.aspx?sourcedoc={82b4b9a5-7b75-40f4-91f3-10f196cca936}&action=embedview&wdAllowInteractivity=False&ActiveCell='Jadwal%20CfS%20and%20SDGs%20Prodi%20IKOM'!I6&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True",
         excelLink:
           "https://telkomuniversityofficial-my.sharepoint.com/:x:/g/personal/icao_telkomuniversity_ac_id/EaW5tIJ1e_RAkfMQ8ZbMqTYBTEFcXb2NHFwieR0y9SIINw?e=oyl9BA&nav=MTVfe0RDNjI0MUJCLTlBOUEtNDM3RS04ODk5LUFERUM2NTVBODQ3NX0"
       }
     ]
   },
   {
     slug: "business-model",
     title: "Business Model",
     department: "Telecommunication Engineering",
     description:
       "This course introduces cloud infrastructure, services (IaaS, PaaS, SaaS), virtualization, and practical implementations such as AWS, Azure, and GCP.",
     image: "/img/business.png",
     schedules: [
       {
         label: "Business Administration",
         excelEmbed:
           "https://telkomuniversityofficial-my.sharepoint.com/personal/icao_telkomuniversity_ac_id/_layouts/15/Doc.aspx?sourcedoc={82b4b9a5-7b75-40f4-91f3-10f196cca936}&action=embedview&wdAllowInteractivity=False&ActiveCell='Jadwal%20BM%20Prodi%20Adbis'!A2&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True",
         excelLink:
           "https://telkomuniversityofficial-my.sharepoint.com/:x:/g/personal/icao_telkomuniversity_ac_id/EaW5tIJ1e_RAkfMQ8ZbMqTYBTEFcXb2NHFwieR0y9SIINw?e=lS5ewo&nav=MTVfe0Y2NTMyODkzLTFCRUYtNEU2Ri1CMUIzLUE1NzFGNDBCMUZFRn0"
       }
     ]
   }
  // Tambahkan course lain di sini
];

function CourseDetail() {
  const { slug } = useParams();
  const course = courseData.find((item) => item.slug === slug);
  const [previewMode, setPreviewMode] = useState({}); // mode per jadwal

  if (!course) {
    return (
      <div className="course-detail">
        <h2>Course not found</h2>
        <Link to="/" className="back-button">
          Back to Home
        </Link>
      </div>
    );
  }

  const togglePreview = (index, mode) => {
    setPreviewMode((prev) => ({ ...prev, [index]: mode }));
  };

  return (
    <div className="course-detail">
      <div className="course-image">
        <img src={course.image} alt={course.title} />
      </div>

      <div className="course-info">
        <h1>{course.title}</h1>
        <h3>{course.department}</h3>

        {course.schedules.map((schedule, index) => {
          const mode = previewMode[index] || "image";

          return (
            <div className="course-sheet-preview" key={index}>
              {course.schedules.length > 1 && (
                <h2>Schedule for {schedule.label}</h2>
              )}

              {/* Tombol switch */}
              <div className="preview-toggle-buttons">
                <button
                  onClick={() => togglePreview(index, "image")}
                  className={`toggle-button image ${
                    mode === "image" ? "active" : ""
                  }`}
                >
                  🖼️ Preview Image
                </button>
                <button
                  onClick={() => togglePreview(index, "excel")}
                  className={`toggle-button excel ${
                    mode === "excel" ? "active" : ""
                  }`}
                >
                  📊 Preview Excel
                </button>
              </div>

              {/* Tampilan berdasarkan mode */}
              {mode === "image" && schedule.imagePreview && (
                <img
                  src={schedule.imagePreview}
                  alt={`Preview for ${schedule.label}`}
                />
              )}

              {mode === "excel" && (
                <iframe
                  src={schedule.excelEmbed}
                  width="100%"
                  height="600px"
                  frameBorder="0"
                  title={`Excel Preview ${schedule.label}`}
                  allowFullScreen
                ></iframe>
              )}

              {/* Tombol buka Excel */}
              <a
                href={schedule.excelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="open-sheet-button"
              >
                📄 Open in Excel ({schedule.label})
              </a>
            </div>
          );
        })}

        <Link to="/#schedule" className="back-button">
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
}

export default CourseDetail;
