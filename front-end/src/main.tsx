import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from './pages/Home.tsx';
import { Root } from './pages/Root.tsx';
import { Level } from './pages/Level.tsx';
import { New } from './pages/Level/New.tsx';
import { NewGroup, ListGroup } from './pages/Group/index.ts';
import { NewClass, ListClass, EditClass, DetailsClass } from './pages/Class/index.ts';
import { Group } from './pages/Group.tsx';
import { StudentInscription, StudentReinscription, StudentList, StudentEdit, StudentDetails } from './pages/Student';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'group',
                element: <Group />
            },
            {
                path: 'level/',
                children: [
                    {
                        path: 'list',
                        element: <Level />
                    },
                    {
                        path: 'new',
                        element: <New />
                    }
                ]
            },
            {
                path: 'group/',
                children: [
                    {
                        path: 'list',
                        element: <ListGroup />
                    },
                    {
                        path: 'new',
                        element: <NewGroup />
                    }
                ]
            },
            {
                path: 'class/',
                children: [
                    {
                        path: 'list',
                        element: <ListClass />
                    },
                    {
                        path: 'new',
                        element: <NewClass />
                    },
                    {
                        path: 'edit/:classId',
                        element: <EditClass />
                    },
                    {
                        path: 'details/:classId',
                        element: <DetailsClass />
                    }
                ]
            },
            {
                path: 'student/',
                children: [
                    {
                        path: 'list',
                        element: <StudentList />
                    },
                    {
                        path: 'inscription',
                        element: <StudentInscription />
                    },
                    {
                        path: 'reinscription',
                        element: <StudentReinscription />
                    },
                    {
                        path: 'edit/:studentId',
                        element: <StudentEdit />
                    },
                    {
                        path: 'details/:studentId',
                        element: <StudentDetails />
                    }
                ]
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
