import "./doctor.css";

const Doctor = () => {
    return (
        <div className="doctorRegistration">
            <h1 className="dRHeading">Doctor Registration</h1>
            <div className="dRForm">
                <div className="r1">
                    <div className="dRSubForm">
                        <p>First Name</p>
                        <input className="firstName dRFormInput" type="text" />
                    </div>
                    <div className="dRSubForm">
                        <p>Last Name</p>
                        <input className="lastName dRFormInput" type="text" />
                    </div>
                </div>
                <div className="r2">
                    <div className="dRSubForm">
                        <p> UserName</p>
                        <input className="date dRFormInput" type="text" />
                    </div>
                    <div className="dRSubForm">
                        <p>Password</p>
                        <input
                            className="cityName dRFormInput"
                            type="password"
                        />
                    </div>
                </div>
                <div className="r3">
                    <div className="dRSubForm">
                        <p>Email Id</p>
                        <input className="problem dRFormInput" type="text" />
                    </div>
                    <div className="dRSubForm">
                        <p>Mobile No.</p>
                        <input className="problem dRFormInput" type="text" />
                    </div>
                </div>
                <div className="r1">
                    <div className="dRSubForm">
                        <p>Specialist In</p>
                        <select
                            className="choose dRFormInput"
                            name="state"
                            id=""
                        >
                            <option value="">
                                Please Select a Specialist:
                            </option>
                            <option value="">Dentist</option>
                        </select>
                    </div>
                    <div className="dRSubForm">
                        <p>Gender</p>
                        <select
                            className="choose dRFormInput"
                            name="state"
                            id=""
                        >
                            <option value="">Please Select a Gender</option>
                            <option value="">Male</option>
                            <option value="">Female</option>
                        </select>
                    </div>
                </div>
                <div className="r2">
                    <div className="dRSubForm">
                        <p>State</p>
                        <select
                            className="choose dRFormInput"
                            name="state"
                            id=""
                        >
                            <option value="">Choose...</option>
                        </select>
                    </div>
                    <div className="dRSubForm">
                        <p>City</p>
                        <input className="cityName dRFormInput" type="text" />
                    </div>
                </div>
                <div className="r1">
                    <div className="dRSubForm">
                        <p>Address</p>
                        <input className="firstName dRFormInput" type="text" />
                    </div>
                    <div className="dRSubForm">
                        <p>Captcha</p>
                        <input className="lastName dRFormInput" type="text" />
                    </div>
                </div>
                <button className="dRBtn">Submit</button>
            </div>
        </div>
    );
};

export default Doctor;
