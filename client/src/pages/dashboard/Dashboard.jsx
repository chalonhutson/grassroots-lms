import "./Dashboard.css"

export default function Dashboard() {
    return (
        <div className="main">
            <div className="topSection">
                <div className="dashboardContainer calendarContainer">
                    calendar stuff
                </div>
                <div className="dashboardContainer plannedCourssContainer">
                    planned courses
                </div>
                <div className="dashboardContainer notificationsContainer">
                    notifications
                </div>
                <div className="dashboardContainer statsticsContainer">
                    statistics
                </div>
                <div className="dashboardContainer newAvailableCoursesContainer">
                    new available courses
                </div>
                <div className="dashboardContainer yourStatsVisualContainer">
                    your stats visual
                </div>
            </div>
            <div className="dashboardContainer achievementsContainer">
                achievements
            </div>
        </div>
    )
}
