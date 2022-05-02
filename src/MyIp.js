const MyIp = ({ ip, code }) => (
    <div className="myip">
        <h1>My IP</h1>

        <h3>{ip}</h3>
        <div>
            <img src={`https://flagcdn.com/160x120/${code}.png`}></img>
        </div>
    </div>
);

export default MyIp;
