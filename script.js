body {
  margin: 0;
  background: #ffeef2;
  font-family: 'Handlee', cursive;
  overflow: hidden;
}

.page {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 500px;
  background: #fff;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0,0,0,0.15);
  display: none;
}

.page.active {
  display: block;
}

button {
  margin: 10px;
  padding: 10px 25px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  background: #ff8c94;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #e57373;
}
