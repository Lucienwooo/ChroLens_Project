'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './VideoPreview.module.css';

interface VideoPreviewProps {
    /** 縮圖圖片路徑 */
    thumbnail?: string;
    /** YouTube 影片 ID */
    youtubeId?: string;
    /** 本地影片路徑 */
    videoSrc?: string;
    /** 標題（用於無障礙） */
    title?: string;
}

/**
 * 仿 Magic UI Hero Video Dialog 實作 (使用 CSS Modules)
 */
export default function VideoPreview({
    thumbnail,
    youtubeId,
    videoSrc,
    title = '影片預覽'
}: VideoPreviewProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isRendered, setIsRendered] = useState(false);

    // 如果沒有影片來源，不顯示任何內容
    if (!youtubeId && !videoSrc && !thumbnail) {
        return null;
    }

    const thumbnailUrl = thumbnail ||
        (youtubeId ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : undefined);

    const openDialog = useCallback(() => {
        if (youtubeId || videoSrc) {
            setIsOpen(true);
            setIsRendered(true);
            document.body.style.overflow = 'hidden'; // 禁止背景捲動
        }
    }, [youtubeId, videoSrc]);

    const closeDialog = useCallback(() => {
        setIsOpen(false);
        document.body.style.overflow = '';
        // 等待動畫結束後再卸載
        setTimeout(() => setIsRendered(false), 300);
    }, []);

    // ESC 鍵收起
    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeDialog();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, closeDialog]);

    return (
        <>
            {/* 觸發區 (Hero Image 樣式) */}
            <div className={styles.heroContainer} onClick={openDialog}>
                <div className={styles.heroImageWrapper}>
                    {thumbnailUrl ? (
                        <img src={thumbnailUrl} alt={title} className={styles.heroImage} />
                    ) : (
                        <div className={styles.heroPlaceholder}>🎬</div>
                    )}
                    
                    {/* Glassmorphism Play Button */}
                    <div className={styles.glassPlayButton}>
                        <div className={styles.playIconWrapper}>
                            <svg viewBox="0 0 24 24" fill="currentColor" className={styles.playIcon}>
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dialog Overlay */}
            {isRendered && (
                <div className={`${styles.overlay} ${isOpen ? styles.active : ''}`} onClick={closeDialog}>
                    <div className={styles.dialogContainer} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={closeDialog}>✕</button>
                        
                        <div className={`${styles.videoContainer} ${isOpen ? styles.scaleUp : ''}`}>
                            {youtubeId ? (
                                <iframe
                                    src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                                    title={title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className={styles.iframeVideo}
                                />
                            ) : videoSrc ? (
                                <video src={videoSrc} controls autoPlay className={styles.rawVideo}>
                                    您的瀏覽器不支援影片播放
                                </video>
                            ) : null}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
