import picky from "/public/assets/images/457369.png";
export const Home = () => {
  return (
    <div>
      <h1 style={{ color: "peru", fontSize: "1rem", marginTop: "10px" }}>
        Home
      </h1>
      <h2>Hola</h2>
      <img
        src="https://media2.bulgari.com/f_auto,q_auto,c_pad,h_2160,w_2160,b_rgb:F6F5F3/production/dw5852c57f/images/images/457369.png"
        alt=""
      />
      <img src="/public/assets/images/457369.png" alt="" />
      <img src={picky} alt="" />
    </div>
  );
};
