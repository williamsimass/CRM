import React from 'react';

const Opportunities = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">Oportunidades</h1>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                    Nova Oportunidade
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Stage: Prospecção */}
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Prospecção</h3>
                    <div className="space-y-3">
                        <div className="bg-white p-3 rounded shadow-sm border border-gray-200">
                            <h4 className="font-medium text-gray-800">Projeto Site Institucional</h4>
                            <p className="text-sm text-gray-500">Cliente: Empresa A</p>
                            <p className="text-xs text-gray-400 mt-2">Valor: R$ 5.000</p>
                        </div>
                    </div>
                </div>

                {/* Stage: Negociação */}
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Negociação</h3>
                    <div className="space-y-3">
                        <div className="bg-white p-3 rounded shadow-sm border border-gray-200">
                            <h4 className="font-medium text-gray-800">Consultoria Marketing</h4>
                            <p className="text-sm text-gray-500">Cliente: Empresa B</p>
                            <p className="text-xs text-gray-400 mt-2">Valor: R$ 2.500/mês</p>
                        </div>
                    </div>
                </div>

                {/* Stage: Fechado */}
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Fechado</h3>
                    <div className="space-y-3">
                        <div className="bg-white p-3 rounded shadow-sm border border-gray-200 border-l-4 border-l-green-500">
                            <h4 className="font-medium text-gray-800">Sistema CRM</h4>
                            <p className="text-sm text-gray-500">Cliente: Empresa C</p>
                            <p className="text-xs text-gray-400 mt-2">Valor: R$ 15.000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Opportunities;
