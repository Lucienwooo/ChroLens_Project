'use client';

import React, { useState } from 'react';
import styles from '../page.module.css';

// 範�??�本資�?
const examples = [
  {
    id: 'office',
    category: '?�� 辦公?��???,
    title: 'Excel ?�次複製貼�?',
    description: '?��?從�??�工作表複製資�??�另一?�工作表',
    code: `# Excel ?�次複製貼�?範�?
# ?�設已�???Excel 檔�?

#?��?
>?�Ctrl,Home, 延遲50ms, T=0s000
>延遲500ms, T=0s000

#複製資�?
>?��?>10�? T=0s000
>?�Ctrl,c, 延遲50ms, T=0s000
>延遲200ms, T=0s000
>?�Ctrl,Tab, 延遲50ms, T=0s000
>延遲300ms, T=0s000
>?�Ctrl,v, 延遲50ms, T=0s000
>延遲200ms, T=0s000
>?�Ctrl,Tab, 延遲50ms, T=0s000
>延遲300ms, T=0s000
>?�Down, 延遲50ms, T=0s000
>?��?結�?, T=0s000

>?�Ctrl,s, 延遲50ms, T=0s000
>延遲1000ms, T=0s000
# 完�?`,
    tips: [
      '?��??��?確�? Excel 視�?已�??�並對焦',
      '?��?實�?資�??�調?��?複次??,
      '?��??�錯誤�??�避?�卡�?
    ]
  },
  {
    id: 'game-farm',
    category: '?�� ?�戲輔助',
    title: '?��??�怪腳??,
    description: '?��?尋找?�物?�攻?�、撿?�戰?��?',
    code: `# ?��??�怪腳?��?�?
#?��???
>設�?變數>?�殺?? 0, T=0s000
>設�?變數>?��??? 100, T=0s000
>>#主循??

#主循??
>if變數>?�殺?? >=, ?��??? T=0s000
>>#任�?完�?
>>>#尋找?�物

#尋找?�物
>計�????��?超�?, 30秒�?, T=0s000
>>#?��?超�?
>辨�?>pic?�物, T=0s000
>>#?�現?�物
>>>#移�?尋找

#?�現?�物
>?�置計�????��?超�?, T=0s000
>左鍵點�?>pic?�物, T=0s000
>延遲500ms, T=0s000
>>#?��?流�?

#?��?流�?
>??, 延遲50ms, T=0s000
>延遲800ms, T=0s000
>??, 延遲50ms, T=0s000
>延遲1000ms, T=0s000
>辨�?>pic?�物, T=0s000
>>#?��?流�?
>>>#?�物死亡

#?�物死亡
>變數??>?�殺?? T=0s000
>延遲500ms, T=0s000
>?��?>3�? T=0s000
>?�z, 延遲50ms, T=0s000
>延遲200ms, T=0s000
>?��?結�?, T=0s000
>>#主循??

#移�?尋找
>移�???800,400), 延遲0ms, T=0s000
>左鍵點�?, 延遲50ms, T=0s000
>?��?延遲>1500ms,2500ms, T=0s000
>>#尋找?�物

#?��?超�?
>?�置計�????��?超�?, T=0s000
>?�m, 延遲50ms, T=0s000
>延遲1000ms, T=0s000
>>#主循??

#任�?完�?
>延遲1000ms, T=0s000
# 完�?`,
    tips: [
      '?�要�??��??�怪物?��??�並?��???pic?�物',
      '?��??�戲調整?�?��??��?延遲?��?',
      '使用?��?延遲?��?被偵�?
    ]
  },
  {
    id: 'anti-afk',
    category: '?�� 系統維護',
    title: '?�止?�腦待�?',
    description: '定�?移�?滑�??�止?�腦?�入休�??�??,
    code: `# ?�止?�腦待�??�本
# 設�?：無?��?複�??��??��? 4 ?��?

#保�?活�?
>移�???960,540), 延遲0ms, T=0s000
>延遲100ms, T=0s000
>移�???965,545), 延遲0ms, T=0s000
>延遲100ms, T=0s000
>移�???960,540), 延遲0ms, T=0s000

# 設�??��??��?，�???4 ?��?�?40秒�?
# ?�主程�?設�?：�?複次??= 0, ?��??��? = 00:04:00`,
    tips: [
      '將�?複次?�設??0（無?��?',
      '將�?複�??�設??00:04:00',
      '確�?滑�?移�??��?置�??�誤觸其他�?�?
    ]
  },
  {
    id: 'testing',
    category: '?�� 軟�?測試',
    title: 'UI ?��??�測�?,
    description: '測試?�入流�?並�?證�???,
    code: `# UI ?��??�測�?- ?�入流�?
#?��?測試
>辨�?>pic?�入?��?, T=0s000
>>#?�到?�入?�面
>>>#?�入?�面?�找??

#?�到?�入?�面
>左鍵點�?(500,300), 延遲50ms, T=0s000
>延遲200ms, T=0s000
>?�test@example.com, 延遲0ms, T=0s000
>延遲300ms, T=0s000
>?�Tab, 延遲50ms, T=0s000
>延遲200ms, T=0s000
>?�test123456, 延遲0ms, T=0s000
>延遲300ms, T=0s000
>左鍵點�?>pic?�入?��?, T=0s000
>延遲2000ms, T=0s000
>>#驗�??�入結�?

#驗�??�入結�?
>辨�?>pic歡�??�面, T=0s000
>>#測試?��?
>>>#測試失�?

#測試?��?
>延遲500ms, T=0s000
# 測試?��?

#測試失�?
>延遲500ms, T=0s000
# 測試失�?

#?�入?�面?�找??
>延遲500ms, T=0s000
# ?��??�登?��??�`,
    tips: [
      '?��??�實?��?測試帳�?密碼',
      '?�要截?�登?��??��?歡�??�面?��???,
      '?�擴展為?��??��?測試流�?'
    ]
  }
];

// 範�??��??�件
const ExampleCard = ({ 
  example,
  isExpanded,
  onToggle
}: { 
  example: typeof examples[0];
  isExpanded: boolean;
  onToggle: () => void;
}) => (
  <div className={`${styles.stepCard} ${isExpanded ? styles.expanded : ''}`}>
    <div className={styles.stepHeader} onClick={onToggle}>
      <div className={styles.stepNumber} style={{ fontSize: '1.5rem', width: 56, height: 56 }}>
        {example.category.split(' ')[0]}
      </div>
      <div className={styles.stepInfo}>
        <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>{example.category}</span>
        <h3>{example.title}</h3>
        <p>{example.description}</p>
      </div>
      <div className={styles.expandIcon}>{isExpanded ? '?? : '??}</div>
    </div>
    {isExpanded && (
      <div className={styles.stepContent}>
        <h4>?�本?�容</h4>
        <div className={styles.codeBlock}>
          <pre>{example.code}</pre>
        </div>

        <h4>使用?�示</h4>
        <ul>
          {example.tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>

        <button
          className={styles.completeBtn}
          onClick={(e) => {
            e.stopPropagation();
            navigator.clipboard.writeText(example.code);
            alert('?�本已�?製到?�貼簿�?');
          }}
        >
          ?? 複製?�本
        </button>
      </div>
    )}
  </div>
);

export default function ExamplesPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>?? 範�??�本</h1>
        <p>實用?�自?��??�本範�?，可?�接複製使用</p>
      </div>

      <nav className={styles.nav}>
        <a href="/mimic/tutorial">??返�??�學首�?</a>
        <a href="/mimic/tutorial/basic">?��??�學</a>
        <a href="/mimic/tutorial/advanced">?��??�學</a>
      </nav>

      <section className={styles.tutorialList}>
        {examples.map((example) => (
          <ExampleCard
            key={example.id}
            example={example}
            isExpanded={expandedId === example.id}
            onToggle={() => setExpandedId(expandedId === example.id ? null : example.id)}
          />
        ))}
      </section>

      <section className={styles.nextSteps}>
        <h2>?�� ?��?步學�?/h2>
        <div className={styles.nextGrid}>
          <a href="/mimic/tutorial/advanced" className={styles.nextCard}>
            <h3>?��??�能</h3>
            <p>學�??��??��??��?/p>
          </a>
          <a href="https://github.com/Lucienwooo/ChroLens-Mimic/tree/main/main/scripts" target="_blank" rel="noopener noreferrer" className={styles.nextCard}>
            <h3>?��?範�?</h3>
            <p>GitHub 上�?完整範�?</p>
          </a>
          <a href="https://discord.gg/72Kbs4WPPn" target="_blank" rel="noopener noreferrer" className={styles.nextCard}>
            <h3>?�享你�??�本</h3>
            <p>?�社群�?享�??�創�?/p>
          </a>
        </div>
      </section>
    </main>
  );
}
