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
            <p>Our Ground Handling Services Company is fully committed to maintaining the highest 
levels of safety in all operational areas including ramp operations, passenger services, 
baggage handling, GSE operations, and aircraft turnaround activities.</p>

            <h2>1.2 Safety Objectives</h2>
            <ol>
                <li>Maintain safe operational practices in compliance with ICAO Annex 19.</li>
                <li>Reduce operational hazards to As Low As Reasonably Practicable (ALARP).</li>
                <li>Establish a non‑punitive safety reporting culture.</li>
                <li>Integrate safety responsibilities across all departments.</li>
                <li>Provide sufficient resources (human, technical, and financial) to support SMS.</li>
            </ol>

            <h2>1.3 Safety Commitment Statement</h2>
            <p>Management commits to:
                <ul>
                    <li>Ensuring all staff understand and fulfill their safety responsibilities.</li>
                    <li>Providing continuous training and communication.</li>
                    <li>Supporting proactive and reactive hazard reporting.</li>
                    <li>Meeting national aviation authority requirements.</li>
                </ul>
            </p>

            <h2>1.4 Safety Responsibilities</h2>
            <ul>
                <li>Accountable Manager: Ensures SMS effectiveness and resource allocation.</li>
                <li>Safety Manager: Oversees SMS implementation and reporting systems.</li>
                <li>Department Managers: Ensure compliance within operational areas.</li>
                <li>All Employees: Report hazards and follow safety procedures.</li>
            </ul>
            `;
            break;

        case "risk":
            content = `
            <h1>Safety Risk Management (SRM)</h1>

            <h2>2.1 Hazard Identification</h2>
            <p>Hazards may arise from: Aircraft turnaround activities, GSE operations, Baggage and cargo handling, Passenger and crew movements, Weather, Human factors, or Infrastructure.</p>

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
            <p>Examples: GSE speed limits, Marshalling and wing-walker requirements, Aircraft stand clearance zones, PPE requirements, Enhanced training on FOD and apron safety.</p>

            <h2>2.4 Change Management</h2>
            <p>SRM is required when: Introducing new equipment, Changing procedures, Expanding to a new stand or gate, Outsourcing operations.</p>

            <h2>2.5 Proactive Risk Tools</h2>
            <ul>
                <li>Job Hazard Analysis (JHA)</li>
                <li>Project Risk Analysis for new operational projects</li>
                <li>Ramp layout reviews to prevent hotspots</li>
                <li>Annual surveys of GSE equipment and traffic routes</li>
            </ul>

            <h2>2.6 Reactive Risk Tools</h2>
            <ul>
                <li>Post-event analysis</li>
                <li>Root-cause identification matrices</li>
                <li>Categorization of occurrences: Human, Technical, Environmental, Organizational</li>
            </ul>

            <h2>2.7 Operational Risk Scenarios</h2>
            <ul>
                <li>Loss of control of a tow tractor</li>
                <li>Belt loader collision with aircraft</li>
                <li>Unauthorized vehicle entry into the aircraft stand</li>
                <li>Unsecured cargo inside a container or ULD</li>
                <li>Delay in removing aircraft stairs during rainfall</li>
            </ul>

            <h2>2.8 Risk Mitigation Library</h2>
            <p>Examples: GSE daily brake checks, designated holding areas; Passengers crowd management, monitoring of aircraft door areas; Cargo verification of cargo securing, ULD handling procedures; Human Factors shift management, limits on excessive overtime.</p>

            <h2>2.9 Dynamic Risk Assessment</h2>
            <p>Applied during rapidly changing weather conditions, simultaneous operations on the same aircraft stand, low-visibility or low-lighting night operations.</p>

            <h2>2.10 Risk Escalation Protocol</h2>
            <p>Immediate notification to Safety Manager, Activity suspension if hazard is direct/imminent, Formation of Rapid Risk Team, Implementation of mitigation measures within 24 hours.</p>

            <h2>2.11 Safety Cases</h2>
            <p>Developed for introduction of new equipment, commissioning of new airport operational areas, partnerships/integration with other ground-handling companies.</p>

            <h2>2.12 Monitoring Effectiveness of Mitigation Controls</h2>
            <p>Review of safety indicators after implementation, interviews with frontline employees using relevant equipment or performing tasks.</p>
            `;
            break;

        case "assurance":
            content = `
            <h1>Safety Assurance</h1>

            <h2>3.1 Safety Performance Monitoring</h2>
            <p>Company monitors: SPIs such as FOD events, GSE collisions, delays due to safety issues, incident and accident trends, and staff compliance with SOPs.</p>

            <h2>3.2 Audits and Inspections</h2>
            <ul>
                <li>Weekly ramp inspections</li>
                <li>Monthly departmental audits</li>
                <li>Annual SMS internal audit</li>
                <li>Corrective Action Plans (CAPs) tracked to closure</li>
            </ul>

            <h2>3.3 Investigation & Reporting</h2>
            <p>All incidents reported via SMS portal. Investigations identify root causes: human, equipment, environmental. Recommendations issued by Safety Manager.</p>

            <h2>3.4 Management Review</h2>
            <p>The Accountable Manager reviews SMS performance annually.</p>
            `;
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
            <ul>
                <li>Monthly safety bulletins</li>
                <li>Toolbox meetings</li>
                <li>Email alerts for high-risk findings</li>
                <li>Posters on FOD, PPE, and safe marshalling</li>
            </ul>

            <h2>4.3 Safety Culture Building</h2>
            <ul>
                <li>Just Culture promoted across all departments</li>
                <li>Recognition programmes for safe behaviour</li>
            </ul>

            <h2>4.4 Safety Awareness Programs</h2>
            <ul>
                <li>Lessons learned from previous incidents</li>
                <li>Recurring operational errors and prevention methods</li>
                <li>Review of new/updated operational procedures</li>
                <li>Distribution of simplified illustrated bulletins for ramp employees</li>
                <li>Integration of safety-related questions into annual employee performance evaluation</li>
            </ul>

            <h2>4.5 Safety Week</h2>
            <ul>
                <li>Practical workshops such as “Proper Use of GSE”</li>
                <li>Live demonstrations of firefighting techniques</li>
                <li>FOD Hunt competitions between operational teams</li>
                <li>Awards for Best Safety Report and Best Safety Initiative</li>
            </ul>

            <h2>4.6 Digital Safety Engagement</h2>
            <ul>
                <li>Internal digital platform or mobile application for instant alerts</li>
                <li>Quick-submission reporting (two-click reporting)</li>
                <li>Short micro-training instructional videos</li>
                <li>SMS and push notifications for critical safety events</li>
            </ul>

            <h2>4.7 Recognition and Reward Programs</h2>
            <ul>
                <li>“Safety Star” certificate for employees reporting significant hazards</li>
                <li>Monthly financial rewards for best performing team with zero incidents</li>
                <li>“Hall of Safety” recognition wall displaying employees’ achievements</li>
            </ul>

            <h2>4.8 Behaviour-Based Safety (BBS)</h2>
            <ul>
                <li>Daily field observations by supervisors: seat belts, safe distances, speed limits</li>
                <li>Analysis of unsafe behaviors and coaching-based corrective actions</li>
            </ul>

            <h2>4.9 Human Factors Campaign</h2>
            <ul>
                <li>Fatigue management</li>
                <li>Effective communication</li>
                <li>Avoidance of distraction (mobile phones)</li>
                <li>Risks of night-shift operations</li>
            </ul>

            <h2>4.10 Safety Knowledge Center</h2>
            <p>Electronic repository containing awareness documents, procedural videos, case studies of global aviation incidents.</p>
            `;
            break;

        case "appendix":
            content = `
            <h1>Appendices</h1>
            <ul>
                <li>Appendix A: Risk Matrix</li>
                <li>Appendix B: Safety Reporting Flowchart</li>
                <li>Appendix C: Roles & Responsibilities</li>
                <li>Appendix D: Sample Forms</li>
            </ul>
            `;
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
