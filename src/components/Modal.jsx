import React, { useEffect, useRef } from "react";

export function Modal({ isOpen, onClose, children }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape" && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            dialogRef.current?.showModal();
            window.addEventListener("keydown", handleKeyDown);
        } else {
            dialogRef.current?.close();
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    const handleOverlayClick = (e) => {
        if (e.target === dialogRef.current) {
            onClose();
        }
    };

    return (
        <dialog
            ref={dialogRef}
            className="rounded-lg w-96 p-6 bg-white shadow-lg backdrop:blur-lg"
            onCancel={onClose}
            onClick={handleOverlayClick}
        >
            <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={onClose}
            >
                ✕
            </button>
            {children}
        </dialog>
    );
}
