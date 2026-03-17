'use client';

import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

export default function Home() {
    const products = [
        {
            title: 'ChroLens Mimic',
            subtitle: 'Windows 自動化工具',
            description: '強大的 Windows 自動化工具，支援錄製滑鼠/鍵盤操作、圖片辨識、AI 物件偵測、OCR 文字辨識等功能。',
            features: [
                '一鍵錄製滑鼠/鍵盤操作',
                '圖片辨識與 YOLO AI 偵測',
                'OCR 文字辨識',
                '觸發器系統',
                '繁體中文在地化',
            ],
            status: 'released' as const,
            link: 'https://lucienwooo.github.io/ChroLens-Mimic/',
            githubLink: 'https://github.com/Lucienwooo/ChroLens-Mimic',
            icon: '🎬',
        },
        {
            title: 'ChroLens AutoFlow',
            subtitle: '影片自動分類工具',
            description: '智能影片自動分類與管理工具，支援 AI 女優識別、滑鼠懸停預覽、以及強大的九宮格多窗瀏覽器。',
            features: [
                'AI 影片編號與姓名識別',
                '滑鼠懸停即時預覽',
                '九宮格多窗瀏覽器',
                '懶加載資源優化技術',
                '自動記憶上次路徑',
            ],
            status: 'released' as const,
            // 暫不開放公開連結
            icon: '🌸',
        },
        {
            title: 'ChroLens Portal',
            subtitle: '快速啟動工具',
            description: '提升工作效率的快速啟動工具，集中管理常用程式、檔案和網址。',
            features: [
                '快速啟動常用程式',
                '檔案管理與分類',
                '網址快捷收藏',
                '自訂快捷鍵',
            ],
            status: 'released' as const,
            githubLink: 'https://github.com/Lucienwooo/ChroLens_Portal',
            icon: '🌐',
        },
        {
            title: 'ChroLens Sorting',
            subtitle: '檔案整理工具',
            description: '智能檔案整理工具，支援自動分類、批次重新命名、重複檔案清理。',
            features: [
                '依檔案類型自動分類',
                '批次重新命名',
                '重複檔案偵測',
                '日期分類整理',
            ],
            status: 'released' as const,
            githubLink: 'https://github.com/Lucienwooo/ChroLens_Sorting',
            icon: '📊',
        },
        {
            title: 'ChroLens Clear',
            subtitle: '視窗自動關閉工具',
            description: '批次關閉指定視窗，支援模糊匹配、延遲執行、重複執行。',
            features: [
                '批次關閉視窗',
                '模糊匹配視窗標題',
                '延遲執行功能',
            ],
            status: 'coming-soon' as const,
            githubLink: 'https://github.com/Lucienwooo/ChroLens_Clear',
            icon: '🧹',
        },
        {
            title: 'ChroLens Magi',
            subtitle: '瑪奇貿易計算器',
            description: '瑪奇線上遊戲的貿易利潤計算工具，支援 AI 圖片辨識與效率分析。',
            features: [
                'Gemini AI 圖片辨識',
                '利潤公式計算',
            ],
            status: 'coming-soon' as const,
            githubLink: 'https://github.com/Lucienwooo/ChroLens_Magi',
            icon: '🎴',
        },
        {
            title: 'ChroLens Sothoth',
            subtitle: '進階自動化工具',
            description: '進階自動化工具，支援複雜邏輯、狀態機、隨機化行為模擬。',
            features: [
                '複雜流程邏輯',
                '行為隨機化',
            ],
            status: 'coming-soon' as const,
            githubLink: 'https://github.com/Lucienwooo/ChroLens_Sothoth',
            icon: '🌀',
        }
    ];

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.title}>
                    <span className={styles.gradient}>ChroLens</span> 專案生態系統
                </h1>
                <p className={styles.subtitle}>
                    讓重複性工作變得簡單的自動化工具系列
                </p>
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>4</div>
                        <div className={styles.statLabel}>個已發布專案</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>100%</div>
                        <div className={styles.statLabel}>開源</div>
                    </div>
                </div>
            </section>

            <section className={styles.products}>
                <h2 className={styles.sectionTitle}>核心工具</h2>
                <div className={styles.grid}>
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </section>

            <section id="about" className={styles.community}>
                <h2>關於 ChroLens Project</h2>
                <p>
                    ChroLens 是一系列專為提升 Windows 使用效率而開發的工具集。<br />
                    我們致力於將複雜的操作簡單化，透過自動化、AI 辨識及智能分類，<br />
                    讓使用者能把時間精準花在真正重要的事情上。
                </p>
                <div className={styles.communityLinks}>
                    <a href="https://discord.gg/72Kbs4WPPn" target="_blank" rel="noopener noreferrer" className={styles.communityButton}>
                        💬 加入 Discord
                    </a>
                    <a href="https://github.com/Lucienwooo" target="_blank" rel="noopener noreferrer" className={styles.communityButton}>
                        🐙 GitHub 作者頁
                    </a>
                </div>
            </section>

            <footer className={styles.footer}>
                <p>© 2026 ChroLens Project. Licensed under GPL v3.</p>
            </footer>
        </div>
    );
}
