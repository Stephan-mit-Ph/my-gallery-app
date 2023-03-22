export default function ColorPalette() {
    return(
        <div>
        {currentPiece.colors.map((color) => {
          return (
            <div key={Math.random()} aria-label="color" style={{width:30, height:30, backgroundColor:`${color}`}}></div>
          )
        })}
      </div>
    );
}