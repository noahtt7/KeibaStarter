import pandas as pd
import random
from flask import Flask, request, jsonify
from flask_cors import CORS
from sklearn.tree import DecisionTreeRegressor
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split

app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    horses = data["horses"]
    distance = data["distance"]
    selected_horses = [horse.replace('-', ' ').title() for horse in horses]
    print(f"Received horses: {selected_horses}")

    keiba_file_path = 'ml/keibasheet.csv'
    keiba_data = pd.read_csv(keiba_file_path)
    #print(keiba_data.describe())

    keiba_columns = ['race_name', 'horse_name', 'surface', 'distance']

    #X = keiba_data[keiba_columns]
    #y = keiba_data.win_flag
    X = keiba_data[["distance", "age", "odds"]] # had racename, horsename, surface, but were strings
    y = keiba_data["place"]

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


    model = RandomForestRegressor()
    model.fit(X_train, y_train)

    #selected_horses = ["Croix du Nord", "Kamunyak", "Jantar Mantar"]
    race_df = (
        keiba_data[keiba_data["horse_name"].isin(selected_horses)]
        .groupby("horse_name", as_index=False)[["distance", "age", "odds"]]
        .mean()
    )
    race_df["distance"] = distance
    #race_df = keiba_data[keiba_data["horse_name"].isin(selected_horses)].copy()
    X_race = race_df[["distance", "age", "odds"]]

    pred_places = model.predict(X_race)
    race_df["predicted_place"] = pred_places
    winner = race_df.loc[race_df["predicted_place"].idxmin(), "horse_name"]

    race_df = race_df.sort_values("predicted_place")
    #print(race_df[["horse_name", "predicted_place"]])


    print(race_df)
    print(winner)

    return winner

    # winner = race_df.sample(weights=race_df["odds"], n=1).iloc[0]
    # print(f"🏆 Winner: {winner['horse_name']} (Prob: {winner['odds']:.2f})")
    # In RaceService, simulateRace pass in horse names

if __name__ == "__main__":
    app.run("0.0.0.0", port=5000)