import { useEffect, useState } from 'react';
import { Bowler } from './types/Bowler';

function BowlingTable() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);



  useEffect(() => {
    const fetchBowlerData = async () => {
      try {
        const rsp = await fetch('http://localhost:5239/api/Bowler');
        if (!rsp.ok) {
          throw new Error('Failed to fetch bowler data');
        }
        const b = await rsp.json();
        setBowlerData(b);
      } catch (error) {
        console.error('Error fetching bowler data:', error);
        // Handle error state here, e.g., set an error flag or show a message to the user
      }
    };

    fetchBowlerData();
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center">Bowlers</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlerData.map((b) => (
            <tr key={b.bowlerid}>
              <th>{b.bowlerfirstname}</th>
              <th>{b.team.teamname}</th>
              <th>{b.bowleraddress}</th>
              <th>{b.bowlercity}</th>
              <th>{b.bowlerstate}</th>
              <th>{b.bowlerzip}</th>
              <th>{b.bowlerphonenumber}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlingTable;
