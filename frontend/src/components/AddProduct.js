import { useState } from 'react'
import axios from "axios";
import { useNavigate} from 'react-router-dom';
const AddProduct = () => {
    const [place, setPlace] = useState('');
    const [days, setDays] = useState('');
    const [pack, setPack] = useState('');
    const [covid_restrictions, setCovid_restrictions] = useState('');
    const [temperature, setTemperature] = useState('');
    const navigate = useNavigate();
    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8181/',{
          place: place,
          days:days,
          pack:pack,
          covid_restrictions:covid_restrictions,
          temperature:temperature
        });
        navigate("/");
    }
 
    return (
        <div>
            <form onSubmit={ saveProduct }>
 
                <div className="field">
                    <label className="label">PLACE</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="place"
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
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddProduct
