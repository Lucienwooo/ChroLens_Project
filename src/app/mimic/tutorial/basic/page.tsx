'use client';

import React from 'react';
import styles from '../page.module.css';

// YouTube 嵌入?�件
const YouTubeEmbed = ({ videoId, title }: { videoId: string; title: string }) => (
  <div className={styles.videoContainer}>
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

export default function BasicTutorialPage() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>?? ?��?使用?�學</h1>
        <p>從零?��?學�? ChroLens Mimic</p>
      </div>

      <nav className={styles.nav}>
        <a href="/mimic/tutorial">??返�??�學首�?</a>
        <a href="/mimic/tutorial/advanced">?��??�學</a>
        <a href="/mimic/tutorial/examples">範�??�本</a>
      </nav>

      <section className={styles.tutorialList}>
        {/* 下�??��?�?*/}
        <article className={styles.stepCard} style={{ borderColor: '#4ec9b0' }}>
          <div className={styles.stepContent} style={{ padding: '1.5rem' }}>
            <h2 style={{ color: '#4ec9b0', marginTop: 0 }}>?�� 下�??��?�?/h2>
            
            <h4>系統?��?/h4>
            <ul>
              <li>Windows 10 ?�更高�???/li>
              <li>建議 4GB RAM 以�?</li>
              <li>?�要管?�員權�?（用?�全局快捷?��?</li>
            </ul>

            <h4>安�?步�?</h4>
            <ol>
              <li>
                ?��? <a href="https://github.com/Lucienwooo/ChroLens-Mimic/releases" target="_blank" rel="noopener noreferrer">GitHub Releases ?�面</a>
              </li>
              <li>下�??�?��??��? <code>ChroLens_Mimic_vX.X.X.zip</code></li>
              <li>�??縮到任�??��?（建議�?中�?路�?�?/li>
              <li>?��? <code>ChroLens_Mimic.exe</code></li>
            </ol>

            <div className={styles.tipBox}>
              <strong>?�� ?�示�?/strong>
              如�? Windows 顯示?�Windows 已�?護您?�電?�」�?請�??�「更多�?訊」�??��?要執行�?
            </div>

            {/* YouTube 影�??��?位置 */}
            <div className={styles.videoPlaceholder}>
              <p>?�� 安�??�學影�?（即將�??��?</p>
              {/* <YouTubeEmbed videoId="YOUR_VIDEO_ID" title="安�??�學" /> */}
            </div>
          </div>
        </article>

        {/* 介面介紹 */}
        <article className={styles.stepCard} style={{ borderColor: '#58a6ff' }}>
          <div className={styles.stepContent} style={{ padding: '1.5rem' }}>
            <h2 style={{ color: '#58a6ff', marginTop: 0 }}>?���?介面介紹</h2>
            
            <h4>主�??��???/h4>
            <ul>
              <li><strong>上方?�制??/strong>：�?製、暫?�、�?止、�??��???/li>
              <li><strong>?�數設�??�</strong>：�??�速度?��?複次?�、�??�設�?/li>
              <li><strong>?�本?�單</strong>：選?�、�??�命?�已?��??�腳??/li>
              <li><strong>左側?�籤</strong>：日誌顯示、腳?�編輯器?�腳?�設定、整體設�?/li>
            </ul>

            <h4>?��?設�?說�?</h4>
            <table className={styles.hotkeyTable}>
              <thead>
                <tr>
                  <th>設�??�目</th>
                  <th>說�?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>?�放?�度</td>
                  <td>100 = �?��?�度�?00 = 2?��?/td>
                </tr>
                <tr>
                  <td>?��?次數</td>
                  <td>0 = ?��??��?</td>
                </tr>
                <tr>
                  <td>?��??��?</td>
                  <td>?��? HH:MM:SS，優?�於次數</td>
                </tr>
                <tr>
                  <td>?��??��?</td>
                  <td>每次?�放之�??��?待�???/td>
                </tr>
                <tr>
                  <td>滑�?模�?</td>
                  <td>?�選 = ?�制?�實滑�?</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        {/* 快捷??*/}
        <article className={styles.stepCard} style={{ borderColor: '#c586c0' }}>
          <div className={styles.stepContent} style={{ padding: '1.5rem' }}>
            <h2 style={{ color: '#c586c0', marginTop: 0 }}>?��? 快捷?��?�?/h2>
            
            <h4>?�設快捷??/h4>
            <table className={styles.hotkeyTable}>
              <thead>
                <tr>
                  <th>?�能</th>
                  <th>快捷??/th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>?��??�製</td>
                  <td><kbd>F10</kbd></td>
                </tr>
                <tr>
                  <td>?��?/繼�?</td>
                  <td><kbd>F11</kbd></td>
                </tr>
                <tr>
                  <td>?�止?�製/?�放</td>
                  <td><kbd>F9</kbd></td>
                </tr>
                <tr>
                  <td>?��??�放</td>
                  <td><kbd>F12</kbd></td>
                </tr>
                <tr>
                  <td>?��? MiniMode</td>
                  <td><kbd>Alt</kbd> + <kbd>`</kbd></td>
                </tr>
                <tr>
                  <td>強制?�止</td>
                  <td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Z</kbd></td>
                </tr>
              </tbody>
            </table>

            <div className={styles.tipBox}>
              <strong>?�� ?�示�?/strong>
              快捷?�可?�「整體設定」�?籤中?��?修改
            </div>
          </div>
        </article>

        {/* 第�??�腳??*/}
        <article className={styles.stepCard} style={{ borderColor: '#3fb950' }}>
          <div className={styles.stepContent} style={{ padding: '1.5rem' }}>
            <h2 style={{ color: '#3fb950', marginTop: 0 }}>?�� ?�製第�??�腳??/h2>
            
            <h4>快速�?�?/h4>
            <ol>
              <li>??<kbd>F10</kbd> ?��??�製</li>
              <li>?��?你想要自?��??��?作�?滑�?點�??�鍵?�輸?��?</li>
              <li>??<kbd>F9</kbd> ?�止?�製</li>
              <li>?�本?�自?�儲存到 <code>scripts/</code> 資�?�?/li>
            </ol>

            <h4>?�放?�本</h4>
            <ol>
              <li>從「腳?�選?�」選?��??�放?�腳??/li>
              <li>設�??�放?�數（速度?��?複次?��?�?/li>
              <li>??<kbd>F12</kbd> ?��??�放</li>
              <li>??<kbd>F9</kbd> ?�隨?��?�?/li>
            </ol>

            <div className={styles.warningBox}>
              <strong>?��? 注�?�?/strong>
              ?�放?��??�移?��?鼠�??��??�能影響?�本?��?準確??
            </div>

            {/* YouTube 影�??��?位置 */}
            <div className={styles.videoPlaceholder}>
              <p>?�� ?�製?�學影�?（即將�??��?</p>
            </div>
          </div>
        </article>

        {/* MiniMode */}
        <article className={styles.stepCard} style={{ borderColor: '#dcdcaa' }}>
          <div className={styles.stepContent} style={{ padding: '1.5rem' }}>
            <h2 style={{ color: '#dcdcaa', marginTop: 0 }}>?�� MiniMode 迷�?模�?</h2>
            
            <p>MiniMode ?��??�精簡�??�制介面，適?�在?�放?�使?��?/p>

            <h4>?�能?��?</h4>
            <ul>
              <li>小巧視�?，�?佔用?��?空�?</li>
              <li>顯示?��??�?��??��?</li>
              <li>快速控?��?�??�放</li>
              <li>?�設置「自?��??�」在?�製/?�放?�自?�進入</li>
            </ul>

            <h4>如�?使用</h4>
            <ol>
              <li>點�?主�??��??�MiniMode?��???/li>
              <li>?��? <kbd>Alt</kbd> + <kbd>`</kbd> 快捷?��???/li>
              <li>?�選?�自?��??�」可?��?�??�放?�自?�進入 MiniMode</li>
            </ol>
          </div>
        </article>
      </section>

      <section className={styles.nextSteps}>
        <h2>?? 下�?�?/h2>
        <div className={styles.nextGrid}>
          <a href="/mimic/tutorial/advanced" className={styles.nextCard}>
            <h3>?��??�能</h3>
            <p>?��?辨�??��?件判?�、�???/p>
          </a>
          <a href="/mimic/tutorial/examples" className={styles.nextCard}>
            <h3>範�??�本</h3>
            <p>實用?�自?��?範�?</p>
          </a>
          <a href="https://discord.gg/72Kbs4WPPn" target="_blank" rel="noopener noreferrer" className={styles.nextCard}>
            <h3>?�入社群</h3>
            <p>?��??�交�?/p>
          </a>
        </div>
      </section>
    </main>
  );
}
