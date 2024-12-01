import React, { Suspense, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Portal } from 'shared/ui/Portal/Portal';

function App() {
    const { theme } = useTheme();

    return (
        <Portal>
            <div className={classNames('app', {}, [theme])}>
                <Suspense fallback="">
                    <Navbar />

                    <div className="content-page">
                        <Sidebar />
                        <AppRouter />
                    </div>
                </Suspense>
            </div>
        </Portal>
    );
}

export default App;
