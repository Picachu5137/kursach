import React, { useEffect, useState } from 'react';
import { bottomMenu } from '../MockData'; // Ваши тестовые данные

export function Footer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(bottomMenu);
    }, []);

    return (
        <footer className="bg-gray-800 text-gray-200 p-6">
            <div className="max-w-screen-xl mx-auto flex flex-wrap">
                <div className="flex flex-wrap flex-grow gap-8">
                    {data.map((block, index) => (
                        <div
                            key={index}
                            className="flex flex-col flex-1 min-w-[150px]">
                            <div className="text-lg font-semibold mb-2">
                                <a href={block.link}>{block.name}</a>
                            </div>
                            {block.nested_links.map((nested_link, nestedIndex) => (
                                <a
                                    key={nestedIndex}
                                    className="text-sm hover:underline mt-1"
                                    href={nested_link.link}
                                >
                                    {nested_link.name}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="ml-auto flex flex-col items-start">
                    <div className="text-lg font-semibold mb-2">Нужна помощь?</div>
                    <p className="text-sm text-blue-400 mb-2">8 999 999 99 99</p>
                    <p className='text-sm mb-2'>example@mail.com</p>
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
}
