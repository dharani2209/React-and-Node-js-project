import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
 
const EditProduct = () => {
    console.log("inside edit product");
    const [place, setPlace] = useState('');
    const [days, setDays] = useState('');
    const [pack, setPack] = useState('');
    const [covid_restrictions, setCovid_restrictions] = useState('');
    const [temperature, setTemperature] = useState('');

    const navigate = useNavigate();

    const { id } = useParams();
    console.log(id);
    console.log(days);
    console.log(place);
    const updateProduct = async (e) => {
        e.preventDefault();
        const response = await axios.put(`http://localhost:8181/${id}`,{
            place: place,
            days:days,
            pack:pack,
            covid_restrictions:covid_restrictions,
            temperature:temperature
        });
        console.log("response from server for put method: ", response);
        console.log(updateProduct);
        navigate("/");
    }
 
    useEffect(() => {
        getProductById();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
 
    const getProductById = async () => {
        const response = await axios.get(`http://localhost:8181/${id}`);
        console.log(response);
        setPlace(response.data.place);
        setDays(response.data.days);
        setPack(response.data.pack);
        setCovid_restrictions(response.data.covid_restrictions);
        setTemperature(response.data.temperature);

    }
 
    return (
        <div>
            <form onSubmit={ updateProduct }>
 
                <div className="field">
                    <label className="label">PLACE</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Place"
                        value={ place }
                        onChange={ (e) => setPlace(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">DAYS</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="days"
                        value={ days }
                        onChange={ (e) => setDays(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">PACK</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="pack"
                        value={ pack }
                        onChange={ (e) => setPack(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">COVID_RESTRICTIONS</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="covid_restrictions"
                        value={ covid_restrictions }
                        onChange={ (e) => setCovid_restrictions(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">TEMPERATURE</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="temperature"
                        value={ temperature }
                        onChange={ (e) => setTemperature(e.target.value) }
                    />
                </div>
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditProduct

