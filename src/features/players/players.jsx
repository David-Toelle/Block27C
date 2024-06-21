// Import the React library
// Import the generated hook from our RTK Query API slice
// Import the CSS styles for this component
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useGetPlayersQuery } from "../../api/puppyBowlApi";
import "../../index.css";

// Define a new React component
export const Players = () => {
  // Use the generated hook to fetch data from the API
  // When the component is first rendered, it will start the API fetch
  // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
  const { data = {}, error, isLoading } = useGetPlayersQuery();

  // Show a loading message while data is being fetched
  if (isLoading) {
    return <p>Loading ...</p>;
  }

  // Show an error message if the fetch failed
  if (error) {
    return <p>Error fetching players: {error.message}</p>;
  }
  const fallbackImageUrl =
    "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png";

  // Show the fetched data after it has arrived
  return (
    <div className="players">
      {/* Map through the data array and generate a div for each player */}
      {data?.data?.players?.map(
        (player) => (
          console.log(player),
          (
            // Use the player's ID as the key for this div
            <div key={player.id} className="player-card">
              {/* Display the player's image, with the player's name as alt text */}
              <div className="player-image-container">
                <img
                  src={
                    player.imageUrl.startsWith("http")
                      ? player.imageUrl
                      : fallbackImageUrl
                  }
                  alt={player.name}
                  className="player-image"
                />
              </div>

              <div className="player-details">
                <h2>
                  {" "}
                  {/* Display the player's name */}
                  Name: {player.name}
                </h2>

                <p>
                  {" "}
                  {/* Display the player's breed */}
                  Breed: {player.breed}
                </p>

                <p>
                  {" "}
                  {/* Display the player's status */}
                  Status: {player.status}
                </p>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
};
export default Players;
// Export the component so it can be imported and used in other files
