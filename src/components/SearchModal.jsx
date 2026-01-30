"use client";
import React from "react";
import rightArrow from "@/app/(web)/assets/images/right-arrow.png"
import Image from 'next/image'
const SearchModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="search-modal-overlay">
            <div className="search-modal">
                <button className="close-btn" onClick={onClose}>✕</button>
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                    autoFocus
                />
                <div className="btn-wrapper">
                    <div className="btn-fill"></div>
                    <div className="btn-content">
                        <div className="left-icon">
                            <Image src={rightArrow} className='img-fluid' alt="" />
                        </div>
                        <div className="btn-text">SEARCH NOW</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
