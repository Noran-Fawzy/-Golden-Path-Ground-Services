const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
let state = 0;
menuBtn.addEventListener("click", () => {
  if (state === 0) {
    sidebar.classList.add("show");
    state = 1;
  }
  else {
    sidebar.classList.remove("show");
    state = 0;
  }
});

function openPage(section) {
    let content = "";

    switch(section) {
        case "policy":
            content = `
            <h1>Safety Policy</h1>
            <h2>1.1 Introduction</h2>
            <p>Our Ground Handling Services Company is fully committed to maintaining the highest levels of safety in all operational areas including ramp operations, passenger services, baggage handling, GSE operations, and aircraft turnaround activities.</p>
            <h2>1.2 Safety Objectives</h2>
            <ul>
                <li>Maintain safe operational practices in compliance with ICAO Annex 19.</li>
                <li>Reduce operational hazards to As Low As Reasonably Practicable (ALARP).</li>
                <li>Establish a non‑punitive safety reporting culture.</li>
                <li>Integrate safety responsibilities across all departments.</li>
                <li>Provide sufficient resources (human, technical, and financial) to support SMS.</li>
            </ul>
            <h2>1.3 Safety Commitment Statement</h2>
            <p>Management commits to: Ensuring all staff understand and fulfill their safety responsibilities, providing continuous training and communication, supporting proactive and reactive hazard reporting, and meeting national aviation authority requirements.</p>
            <h2>1.4 Safety Responsibilities</h2>
            <ul>
                <li>Accountable Manager: Ensures SMS effectiveness and resource allocation.</li>
                <li>Safety Manager: Oversees SMS implementation and reporting systems.</li>
                <li>Department Managers: Ensure compliance within operational areas.</li>
                <li>All Employees: Report hazards and follow safety procedures.</li>
            </ul>`;
            break;

        case "risk":
            content = `
            <h1>Safety Risk Management (SRM)</h1>
            <h2>2.1 Hazard Identification</h2>
            <p>Hazards may arise from aircraft turnaround activities, GSE operations, baggage and cargo handling, passenger and crew movements, weather, human factors, or infrastructure.</p>
            <h2>2.2 Risk Assessment Process</h2>
            <ol>
                <li>Identify hazard.</li>
                <li>Determine potential consequences.</li>
                <li>Assess Severity (Catastrophic → Negligible).</li>
                <li>Assess Probability (Frequent → Extremely Rare).</li>
                <li>Assign Risk Index using risk matrix.</li>
                <li>Decide on control/mitigation.</li>
            </ol>
            <h2>2.3 Risk Mitigation</h2>
            <p>Examples: GSE speed limits, marshalling and wing-walker requirements, aircraft stand clearance zones, PPE requirements, enhanced training on FOD and apron safety.</p>`;
            break;

        case "assurance":
            content = `
            <h1>Safety Assurance</h1>
            <h2>3.1 Safety Performance Monitoring</h2>
            <p>Company monitors SPIs such as FOD events, GSE collisions, delays due to safety issues, incident and accident trends, and staff compliance with SOPs.</p>
            <h2>3.2 Audits and Inspections</h2>
            <ul>
                <li>Weekly ramp inspections</li>
                <li>Monthly departmental audits</li>
                <li>Annual SMS internal audit</li>
                <li>Corrective Action Plans (CAPs) tracked to closure</li>
            </ul>
            <h2>3.3 Investigation & Reporting</h2>
            <p>All incidents reported via SMS portal. Investigations identify root causes and recommendations issued by Safety Manager.</p>`;
            break;

        case "promotion":
            content = `
            <h1>Safety Promotion</h1>
            <h2>4.1 Training Programme</h2>
            <ul>
                <li>Initial SMS Training for new staff</li>
                <li>Recurrent annual SMS training</li>
                <li>Human Factors training</li>
                <li>Apron safety & FOD prevention</li>
                <li>GSE operation and Marshalling training</li>
            </ul>
            <h2>4.2 Safety Communication</h2>
            <p>Monthly safety bulletins, toolbox meetings, email alerts, posters on FOD, PPE, and safe marshalling.</p>`;
            break;
        
        case "appendix":
    content = `
    <h1>Appendices (Optional)</h1>
    <ul>
        <li>Appendix A: Risk Matrix</li>
        <li>Appendix B: Safety Reporting Flowchart</li>
        <li>Appendix C: Roles & Responsibilities</li>
        <li>Appendix D: Sample Forms</li>
    </ul>`;
    break;
    }
    
const newWindow = window.open("", "_blank");
newWindow.document.write(`
    <html>
    <head>
        <title>${section}</title>
        <style>
            body { background: #0b1624; color: white; font-family: Arial; padding: 20px; }
            h1, h2 { color: gold; }
            p, li { font-size: 18px; line-height: 1.6; }
            ul, ol { margin-left: 20px; }
            .home-btn {
                display: inline-block;
                margin-bottom: 20px;
                padding: 10px 20px;
                background: gold;
                color: black;
                text-decoration: none;
                border-radius: 8px;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <a href="index.html" class="home-btn">Home</a>
        ${content}
    </body>
    </html>
`);
newWindow.document.close();

}
