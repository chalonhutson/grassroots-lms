import { createBrowserRouter, Navigate, useRouteError } from "react-router-dom"
import { RootLayout } from "./layouts/RootLayout"
import Dashboard from "./pages/dashboard/Dashboard"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <Dashboard /> },
                    {
                        path: "/",
                        children: [
                            // {
                            //     index: true,
                            //     element: <Dashboard />,
                            // },
                        ],
                    },
                    { path: "*", element: <h1>404 - Page Not Found</h1> },
                ],
            },
        ],
    },
])

function ErrorPage() {
    const error = useRouteError()

    return (
        <>
            <h1>Error - Something went wrong</h1>
            {import.meta.env.MODE !== "production" && (
                <>
                    <pre>{error.message}</pre>
                    <pre>{error.stack}</pre>
                </>
            )}
        </>
    )
}