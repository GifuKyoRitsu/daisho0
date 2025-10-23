.map-wrap{
  position: relative;
  width: 100%;
  /* 高さは環境に依存しないよう vh と px の併用 */
  height: 60vh;
  min-height: 420px;
  max-height: 760px;

  /* ← ここを変える：黒背景は残すが、overflow は切る */
  background: #000;
  /* overflow: hidden;  は外す */
  border-radius: 0;         /* 角丸は iframe 側で行う */
  box-shadow: var(--shadow);
  margin: 10px 0 18px;
}

/* 角丸は iframe に直接適用（マスクではなく自身に丸み） */
.map-wrap iframe{
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  border: 0; display: block;
  border-radius: var(--radius);     /* ← 角丸はこちら */
  background: transparent;          /* 念のため */
}

/* かなり小さい端末 */
@media (max-width: 360px) and (orientation: portrait){
  .map-wrap{ height: 52vh; min-height: 360px; max-height: 580px; }
}

/* タブレット以上 */
@media (min-width: 600px){
  .map-wrap{ height: 62vh; min-height: 480px; max-height: 780px; }
}

/* PCワイド */
@media (min-width: 1024px){
  .map-wrap{ height: 64vh; min-height: 520px; max-height: 820px; }
}