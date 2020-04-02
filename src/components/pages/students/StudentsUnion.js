import React from 'react';
import Layout from '../Layout';
import Loading from '../../commons/Loading'
import StudentsUnionCard from './StudentUnionCard';
import union from '../../../data/union.json'
//import titleCase from '../../commons/CommonFunctions';
//import { loadJsonData } from '../../../api/data';

export default function StudentsUnion() {
    const portfolio = union.portfolio;
    //console.log("union", union);
    //console.log("portfolio", portfolio);
    //debugger;
    //const [union, setUnion] = useState(null);

    // useEffect(() => {
    //     // loadJsonData("students-union")
    //     //     .then(data => {
    //     //         setUnion(data);
    //     //     })
    // }, []);

    const showContent = () => (
        <ul className="list-group mb-4">
            <li className="list-group-item">
                <h6> Aims and objects of the Students’ Union :</h6>
                <ul style={{ listStyleType: "disc" }}>
                    <li>To represent the welfare and interest of the Students.</li>
                    <li>To organise debates, discussions on general, cultural, academic, national and international programs</li>
                    <li>To take up such other activities as proposed by the union and approved by the principle.</li>
                    <li>To promote better relation between all the people through a framework of friendship and service.</li>
                </ul>
            </li>
        </ul>

    )

    const showStudentsUnion = () => {
        return (
            portfolio && portfolio.lenght === 0 ? (<Loading text="Loading students union.." />) :
                (portfolio.map(p => <StudentsUnionCard key={p.year} portfolio={p} />))
        )
    }
    return (
        <Layout title={`Student's Union`}>
            {showContent()}
            {showStudentsUnion()}
        </Layout>
    );
}
