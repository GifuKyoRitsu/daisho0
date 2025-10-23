/* ===== Map (PC横／スマホ縦に最適化) ===== */
:root{
  --maxw:1100px;
  --radius:14px;
  --shadow: 0 8px 24px rgba(0,0,0,.08);
}

/* コンテナは base.css の .container を使用 */

/* マップ本体：デフォルト（モバイル縦を想定したモバイルファースト） */
.map-wrap{
  position: relative;
  width: 100%;
  /* 画面高さに応じて可変。下の戻るボタンが隠れないようmin/maxも設定 */
  height: 58vh;
  min-height: 420px;
  max-height: 640px;

  background: #000;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  /* 戻るボタン・説明との間に余白を確保 */
  margin: 10px 0 18px;
}

/* iOS等のセーフエリア考慮（ノッチ/ホームバー回避） */
@supports(padding: max(0px)) {
  .map-wrap { margin-bottom: max(18px, env(safe-area-inset-bottom)); }
}

.map-wrap iframe{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

/* スポット選択ボタン：カード風 */
.spots{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}
.spot{
  background: var(--card, #fff);
  color: inherit;
  border: 1px solid var(--border, #e5e7eb);
  border-radius: 10px;
  padding: 12px 14px;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: transform .2s ease, box-shadow .2s ease, outline-color .2s ease;
}
.spot:hover{ transform: translateY(-1px); }
.spot.active{
  outline: 2px solid color-mix(in oklab, #2563eb 45%, #ffffff);
  outline-offset: 2px;
}

/* --- 端末別最適化 --- */

/* スマホ縦（とても小さい幅）では少し低めに */
@media (max-width: 360px) and (orientation: portrait){
  .map-wrap{
    height: 52vh;
    min-height: 360px;
    max-height: 580px;
  }
}

/* タブレット縦やスマホ横など高さに余裕がある場面で少し広く */
@media (min-width: 600px){
  .map-wrap{
    height: 60vh;
    min-height: 480px;
    max-height: 700px;
  }
}

/* PC（横に広い画面）ではさらに見やすく */
@media (min-width: 1024px){
  .map-wrap{
    height: 62vh;        /* 画面高の6割強 */
    min-height: 520px;   /* ノートPCで十分な表示 */
    max-height: 760px;   /* 大画面での伸び過ぎを防止 */
  }
}

/* 超ワイド画面は上限をもう少し緩めてもOK */
@media (min-width: 1440px){
  .map-wrap{
    max-height: 820px;
  }
}