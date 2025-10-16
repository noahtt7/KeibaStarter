import pandas as pd
import random
from sklearn.tree import DecisionTreeRegressor
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split

keiba_file_path = 'ml/keibasheet.csv'
keiba_data = pd.read_csv(keiba_file_path)
print(keiba_data.describe())

keiba_columns = ['race_name', 'horse_name', 'surface', 'distance']

#X = keiba_data[keiba_columns]
#y = keiba_data.win_flag
X = keiba_data[["distance", "age", "odds"]] # had racename, horsename, surface, but were strings
y = keiba_data["place"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


model = RandomForestRegressor()
model.fit(X_train, y_train)

selected_horses = ["Croix du Nord", "Kamunyak", "Jantar Mantar"]
race_df = (
    keiba_data[keiba_data["horse_name"].isin(selected_horses)]
    .groupby("horse_name", as_index=False)[["distance", "age", "odds"]]
    .mean()
)
race_df["distance"] = 2400 #fixed distance
#race_df = keiba_data[keiba_data["horse_name"].isin(selected_horses)].copy()
X_race = race_df[["distance", "age", "odds"]]

pred_places = model.predict(X_race)
race_df["predicted_place"] = pred_places
winner = race_df.loc[race_df["predicted_place"].idxmin(), "horse_name"]

race_df = race_df.sort_values("predicted_place")
#print(race_df[["horse_name", "predicted_place"]])


print(race_df)
print(winner)

# winner = race_df.sample(weights=race_df["odds"], n=1).iloc[0]
# print(f"🏆 Winner: {winner['horse_name']} (Prob: {winner['odds']:.2f})")

# ---------
# keiba_model = DecisionTreeRegressor(random_state=1)


# #keiba_model.fit(X, y)
# model = LogisticRegression()
# model.fit(X, y)
# print(X.head())

# print("Predictions are")
# print(model.predict(X.head()))

# keiba_data["race_name"] = keiba_data["race_name"].astype("category").cat.codes
# keiba_data["surface"] = keiba_data["surface"].astype("category").cat.codes
# print(keiba_data)