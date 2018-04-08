const timer = new Date().toLocaleTimeString();

const Tick = () => (
    setInterval(timer, 1000)
);


export default Tick;