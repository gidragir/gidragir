import React, { Suspense } from 'react';

const ParentWatchGraph = React.lazy(() => import('./ParentWatchGraph'));

export default function WatchGraphWrapper() {
    return (
        <Suspense fallback={
            <div className="w-full h-[600px] flex items-center justify-center bg-slate-900 rounded-xl text-slate-500 font-medium animate-pulse">
                Загрузка архитектуры (Graph)...
            </div>
        }>
            <div className="w-full h-[600px] rounded-xl overflow-hidden border border-slate-700">
                <ParentWatchGraph />
            </div>
        </Suspense>
    );
}
