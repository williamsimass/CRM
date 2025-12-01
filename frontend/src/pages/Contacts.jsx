import React from 'react';

const Contacts = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">Contatos</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Novo Contato
                </button>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefone</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Empresa</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {/* Placeholder Row */}
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">João Silva</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">joao@exemplo.com</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(11) 99999-9999</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Empresa X</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="#" className="text-blue-600 hover:text-blue-900">Editar</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Maria Oliveira</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">maria@exemplo.com</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(21) 88888-8888</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Empresa Y</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="#" className="text-blue-600 hover:text-blue-900">Editar</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Contacts;
