import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md">
                <div className="p-4 border-b">
                    <h1 className="text-2xl font-bold text-blue-600">CRM</h1>
                </div>
                <nav className="p-4">
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="block p-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacts" className="block p-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                                Contatos
                            </Link>
                        </li>
                        <li>
                            <Link to="/opportunities" className="block p-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                                Oportunidades
                            </Link>
                        </li>
                        <li>
                            <Link to="/reports" className="block p-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                                Relatórios
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow-sm p-4 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">Bem-vindo</h2>
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-600">Usuário</span>
                        <button className="text-sm text-red-500 hover:text-red-700">Sair</button>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
                    <Outlet />
                </main>

                {/* Footer */}
                <footer className="bg-white border-t p-4 text-center text-gray-500 text-sm">
                    &copy; 2024 CRM System. Todos os direitos reservados.
                </footer>
            </div>
        </div>
    );
};

export default Layout;
