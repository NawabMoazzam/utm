"use client"
import Link from 'next/link'
import React from 'react'
import Cookies from 'js-cookie';
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react';

const NavBottom = () => {
    // Assuming username is stored in cookies
    const [username, setUsername] = useState('');
    const currentPath = usePathname();
    const checkPath = currentPath === "/" || currentPath === "/login" || currentPath === "/admin" || currentPath === "/admin/adminpanel"

    // Fetch username from cookies on client-side
    useEffect(() => {
        const storedUsername = Cookies.get('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);
    return (
        <ul className={`${checkPath ? "hidden" : "md:hidden flex"} fixed bottom-0 w-full flex-wrap justify-center text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400`}>
            <li className="me-2">
                <Link href={`/dashboard/${username}`} className={`inline-block p-2 sm:p-4 rounded-t-lg ${currentPath === `/dashboard/${username}` ? "text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500" : " text-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-gray-300"}`}>Dashboard</Link>
            </li>
            <li className="me-2">
                <Link href={`/dashboard/${username}/utmlinks`} className={`inline-block p-2 sm:p-4 rounded-t-lg ${currentPath === `/dashboard/${username}/utmlinks` ? "text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500" : " text-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-gray-300"}`}>UTM-Links</Link>
            </li>
            <li className="me-2">
                <Link href={`/dashboard/${username}/utmgenerator`} className={`inline-block p-2 sm:p-4 rounded-t-lg ${currentPath === `/dashboard/${username}/utmgenerator` ? "text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500" : " text-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-gray-300"}`}>UTM Generator</Link>
            </li>
        </ul>
    )
}

export default NavBottom
