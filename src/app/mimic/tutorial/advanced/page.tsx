'use client';

import React, { useState } from 'react';
import styles from '../page.module.css';

// 程�?碼�?塊�?�?
const CodeBlock = ({ code, language = 'text' }: { code: string; language?: string }) => (
  <div className={styles.codeBlock}>
    <pre>{code}</pre>
  </div>
);

// ?��??��?塊�?�?
const ExpandableSection = ({ 
  title, 
  children 
}: { 
  title: string;
  children: React.ReactNode;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.stepCard}>
      <div 
        className={styles.stepHeader} 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className={styles.stepInfo}>
          <h3>{title}</h3>
        </div>
        <div className={styles.expandIcon}>{isExpanded ? '?? : '??}</div>
      </div>
      {isExpanded && (
        <div className={styles.stepContent}>
          {children}
        </div>
      )}
    </div>
  );
};

export default function AdvancedTutorialPage() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>?�� ?��??�能?�學</h1>
        <p>深入學�? ChroLens Mimic ?�進�??��??��???/p>
      </div>

      <nav className={styles.nav}>
        <a href="/mimic/tutorial">??返�??�學首�?</a>
        <a href="/mimic/tutorial/basic">?��??�學</a>
        <a href="/mimic/tutorial/examples">範�??�本</a>
      </nav>

      <section className={styles.tutorialList}>
        <ExpandableSection title="?���??��?辨�??�能">
          <h4>?�本?��?</h4>
          <p>?��?辨�?讓�??�腳?�可以「�?見」螢幕內容�??��??�面?��??�斷??/p>
          
          <CodeBlock code={`# ?�本辨�??�令
>辨�?>pic01, T=0s000

# 辨�??��?後�???
>左鍵點�?>pic01, T=0s000

# 帶�??��??��?辨�?
>辨�?>pic01, 範�?(100,200,500,600), T=0s000

# 顯示辨�??��?（用?�調試�?
>辨�?>pic01, ?��?, T=0s000

# 組�?使用
>辨�?>pic血�? ?��?, 範�?(50,50,200,120), T=0s000`} />

          <h4>?��??��?規�?</h4>
          <ul>
            <li>必�?�?<code>pic</code> ?�頭</li>
            <li>?�援中�??�英?�、數字�??��?<code>pic01</code>??code>pic血�?/code>??code>pic確�??��?</code></li>
            <li>?��??��??��???<code>scripts/images/</code> 資�?�?/li>
          </ul>

          <h4>?��?工具</h4>
          <p>?�編輯器中�??�「截?�辨識」�??��??�可?��??��??�?�並?��??�入?�令??/p>

          <div className={styles.tipBox}>
            <strong>?�� ?�巧�?</strong>使用?��??�」�??�可以�??��?尋�??��??��?辨�??�度?��?確性�?
          </div>
        </ExpandableSection>

        <ExpandableSection title="?? OCR ?��?辨�?">
          <h4>?��?辨�??�令</h4>
          <p>使用 OCR ?�能，�??�腳?�可以辨識�?點�??��?上�??��???/p>
          
          <CodeBlock code={`# ?�斷?��??�否存在
>if?��?>確�?, T=0s000
>>#點�?確�?
>>>#?��?不�???

# 等�??��??�現
>等�??��?>載入完�?, ?�??0s, T=0s000

# ?�接點�??��?
>點�??��?>?��??�戲, T=0s000`} />

          <h4>使用?�景</h4>
          <ul>
            <li>點�??��??��??��??��??��?位置不固定�?</li>
            <li>等�?載入完�??��?�?/li>
            <li>?��??��??�單?��?</li>
          </ul>

          <div className={styles.warningBox}>
            <strong>?��? 注�?�?/strong>OCR 辨�??�要�?多�?算�?源�??�於?��?使用?�能影響?�能??
          </div>
        </ExpandableSection>

        <ExpandableSection title="?? 條件?�斷?��???>
          <h4>if 條件?�斷</h4>
          <p>使用條件?�斷讓腳?�根?��?況執行�??��??��???/p>
          
          <CodeBlock code={`# ?�本結�?
#檢查?��?
>辨�?>pic?�人, T=0s000
>>#?�現?�人    ??辨�??��??�跳�?
>>>#?�發?�敵�? ??辨�?失�??�跳�?

#?�現?�人
>左鍵點�?>pic?�人, T=0s000
>>#?��?

#?�發?�敵�?
>延遲2000ms, T=0s000
>>#檢查?��?    ??繼�?循環檢查`} />

          <h4>?�支跳�?符�?</h4>
          <table className={styles.hotkeyTable}>
            <thead>
              <tr>
                <th>符�?</th>
                <th>?�義</th>
                <th>使用?��?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>{'>>#標籤'}</code></td>
                <td>?��?跳�?</td>
                <td>條件?��???/td>
              </tr>
              <tr>
                <td><code>{'>>>#標籤'}</code></td>
                <td>失�?跳�?</td>
                <td>條件不�?立�?</td>
              </tr>
            </tbody>
          </table>
        </ExpandableSection>

        <ExpandableSection title="?? 變數?��??�器">
          <h4>變數?��?</h4>
          <p>使用變數追蹤?�?��?計數??/p>
          
          <CodeBlock code={`# 設�?變數
>設�?變數>?��?次數, 0, T=0s000
>設�?變數>?�大次?? 10, T=0s000

# 變數?��?
>變數??>?��?次數, T=0s000
>變數�?>?��?次數, T=0s000

# 變數條件?�斷
>if變數>?��?次數, >=, ?�大次?? T=0s000
>>#?�到上�?
>>>#繼�??��?`} />

          <h4>計數?��?計�???/h4>
          <CodeBlock code={`# 計數?��??�到次數後觸??
>計數??失�?次數, 3次�?, T=0s000
>>#?��?失�?
>?�置計數??失�?次數, T=0s000

# 計�??��?超�?後觸??
>計�????��??�物, 30秒�?, T=0s000
>>#?��?超�?
>?�置計�????��??�物, T=0s000`} />

          <div className={styles.tipBox}>
            <strong>?�� ?�巧�?</strong>計數?��?計�??��?常適?��??�「卡住」�??��?，�?如�?續�?試失?��??�錯誤�??��?
          </div>
        </ExpandableSection>

        <ExpandableSection title="?? ?��??��?">
          <h4>?��??��?/h4>
          <p>使用?��??�令?��??��?次數?��?作�?/p>
          
          <CodeBlock code={`# ?��? 5 次撿?��?�?
>?��?>5�? T=0s000
>?�z, 延遲50ms, T=0s000
>延遲200ms, T=0s000
>?��?結�?, T=0s000`} />

          <h4>?��?延遲</h4>
          <p>使用?��?延遲讓�?作�?起�??�自?��??��?被偵測為機器人�?/p>
          
          <CodeBlock code={`# ?��?延遲 100-500ms
>?��?延遲>100ms,500ms, T=0s000

# ?��??��?�?0% 機�??��?�?
>?��??��?>50%, T=0s000
>>#?��??�個�?�?
>>>#跳�?`} />
        </ExpandableSection>

        <ExpandableSection title="?�� ?��?模�?">
          <h4>建�?模�?</h4>
          <p>將常?��??�令組�?封�??�模組�??�便?��?使用??/p>
          
          <ol>
            <li>?�編輯器中選?��?封�??��?�?/li>
            <li>?�鍵?��??�儲存為?��?模�???/li>
            <li>輸入模�??�稱（�?如�?<code>?��????</code>�?/li>
          </ol>

          <h4>使用模�?</h4>
          <CodeBlock code={`# 引用?��?模�?
>#mod_?��????

# 模�?檔�??��?位置
scripts/modules/mod_?��????.txt`} />

          <div className={styles.tipBox}>
            <strong>?�� ?�巧�?</strong>模�??�以?�含標籤?��??��??�函式�?�??織�??��?輯�?
          </div>
        </ExpandableSection>
      </section>

      <section className={styles.nextSteps}>
        <h2>?? ?��?資�?</h2>
        <div className={styles.nextGrid}>
          <a href="/mimic/tutorial/examples" className={styles.nextCard}>
            <h3>範�??�本</h3>
            <p>實�??�用案�?</p>
          </a>
          <a href="https://github.com/Lucienwooo/ChroLens-Mimic" target="_blank" rel="noopener noreferrer" className={styles.nextCard}>
            <h3>GitHub ?��?�?/h3>
            <p>?��?完整?��?�?/p>
          </a>
          <a href="https://discord.gg/72Kbs4WPPn" target="_blank" rel="noopener noreferrer" className={styles.nextCard}>
            <h3>Discord 社群</h3>
            <p>?��??�交�?/p>
          </a>
        </div>
      </section>
    </main>
  );
}
