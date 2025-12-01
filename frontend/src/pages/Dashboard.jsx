import React from 'react';

const Dashboard = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-500 text-sm font-medium">Total de Contatos</h3>
                    <p className="text-3xl font-bold text-blue-600 mt-2">1,234</p>
                </div>
                {/* Card 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-500 text-sm font-medium">Oportunidades Abertas</h3>
                    <p className="text-3xl font-bold text-green-600 mt-2">56</p>
                </div>
                {/* Card 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-500 text-sm font-medium">Vendas no Mês</h3>
                    <p className="text-3xl font-bold text-purple-600 mt-2">R$ 45.000</p>
                </div>
                {/* Card 4 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-500 text-sm font-medium">Tarefas Pendentes</h3>
                    <p className="text-3xl font-bold text-red-600 mt-2">12</p>
                </div>
            </div>

            {/* Recent Activity Placeholder */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Atividade Recente</h2>
                <p className="text-gray-500">Nenhuma atividade recente para exibir.</p>
            </div>
        </div>
    );
};

export default Dashboard;
