import React, { useEffect, useState } from "react";

import { bottomMenu } from "../MockData";


export function Footer() {
    const [data, setData] = useState([]);
    const [expandedBlocks, setExpandedBlocks] = useState({});

    useEffect(() => {
        setData(bottomMenu);
        const initialExpandedState = bottomMenu.reduce((acc, _, index) => {
            acc[index] = false;
            return acc;
        }, {});
        setExpandedBlocks(initialExpandedState);
    }, []);

    const toggleBlock = (index) => {
        setExpandedBlocks((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <footer className="bg-gray-800 text-gray-200 p-6">
            <div className="max-w-screen-xl mx-auto flex flex-wrap">
                {/* Основные блоки меню */}
                <div className="flex flex-wrap w-full md:w-3/4 gap-8">
                    {data.map((block, index) => (
                        <div
                            key={index}
                            className="flex flex-col w-full md:w-1/4 border-b border-gray-700 pb-2 md:border-none md:pb-0"
                        >
                            <button
                                className="text-lg font-semibold mb-2 flex items-center justify-between w-full bg-transparent text-left"
                                onClick={() => toggleBlock(index)}
                            >
                                <span>{block.name}</span>
                                <span className="md:hidden">
                                    {expandedBlocks[index] ? "▲" : "▼"}
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    expandedBlocks[index] ? "max-h-40" : "max-h-0"
                                } md:max-h-full`}
                            >
                                {block.nested_links.map((nested_link, nestedIndex) => (
                                    <a
                                        key={nestedIndex}
                                        className="text-sm hover:underline mt-1 block"
                                        href={nested_link.link}
                                    >
                                        {nested_link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Статичный блок с соцсетями */}
                <div className="w-full md:w-1/4 mt-8 md:mt-0 md:ml-auto flex flex-col items-start">
                    <div className="text-lg font-semibold mb-2">Нужна помощь?</div>
                    <p className="text-sm text-blue-400 mb-2">8 999 999 99 99</p>
                    <p className="text-sm mb-2">example@mail.com</p>
                    <div className="flex mt-4 space-x-2">
                        <a href="#" className="text-gray-400 hover:text-gray-200">
                            Telegram
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-200">
                            YouTube
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-200">
                            VK
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

