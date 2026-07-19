import pandas as pd
import random
from flask import Flask, request, jsonify
from flask_cors import CORS
from sklearn.tree import DecisionTreeRegressor
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)

keiba_file_path = 'keibasheet.csv'
keiba_data = pd.read_csv(keiba_file_path)

all_horse_stats = (
    keiba_data
    .groupby("horse_name")
    .agg(
        win_rate=("win_flag", "mean"),
        top3_rate=("place", lambda x: (x <= 3).sum()),
        avg_finish=("place", "mean"),
        age=("age", "max")
    ).reset_index()
)
   
# Join stats
keiba_data = keiba_data.merge(all_horse_stats[["horse_name", "win_rate", "top3_rate", "avg_finish"]], on="horse_name", how="left")
    
FEATURES = ["distance", "age", "win_rate", "top3_rate", "avg_finish"]
X = keiba_data[FEATURES]
y = keiba_data["place"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = RandomForestRegressor()
model.fit(X_train, y_train)

@app.route("/predict", methods=["POST"])
def predict():
    logger.info("---- inside function-----")
    data = request.get_json()
    horses = data["horses"]
    distance = data["distance"]
    selected_horses = [horse.replace('-', ' ').title() for horse in horses]
    print(f"Database horses: {horses}")
    print(f"Testing text")
    logger.info(f"Received horses: {selected_horses}")
    print(f"Received horses: {selected_horses}")


   #  race_history = keiba_data[
   #     keiba_data["horse_name"].isin(selected_horses)
   #  ].copy()
    
    horse_stats = all_horse_stats[all_horse_stats["horse_name"].isin(selected_horses)].copy()
    # horse_stats["distance"] = distance

    #  horse_stats["win_rate"] = (
    #     horse_stats["career_wins"] /
    #     horse_stats["career_starts"]
    #  )
    
    #  horse_stats['top3_rate'] = (
    #     horse_stats["career_top3"] /
    #     horse_stats["career_starts"]
    #  )

    horse_stats["distance"] = distance

    X_race = horse_stats[FEATURES]

    predictions = model.predict(X_race)

    #noise
    noise = np.random.normal(0, 0.5, size=len(predictions))
    predictions = predictions + noise

    horse_stats["prediction"] = predictions

    winner = horse_stats.loc[horse_stats["prediction"].idxmin(), "horse_name"]

    ##
    # race_df["distance"] = distance
    # #race_df = keiba_data[keiba_data["horse_name"].isin(selected_horses)].copy()
    # X_race = race_df[["distance", "age", "odds"]]

    # pred_places = model.predict(X_race)
    # race_df["predicted_place"] = pred_places
    # winner = race_df.loc[race_df["predicted_place"].idxmin(), "horse_name"]

    # race_df = race_df.sort_values("predicted_place")
    # #print(race_df[["horse_name", "predicted_place"]])


    # print(race_df)
    # print(winner)

    return winner

    # winner = race_df.sample(weights=race_df["odds"], n=1).iloc[0]
    # print(f"🏆 Winner: {winner['horse_name']} (Prob: {winner['odds']:.2f})")
    # In RaceService, simulateRace pass in horse names

@app.route("/health")
def health():
    return 'OK'

if __name__ == "__main__":
    app.run("0.0.0.0", port=5000)