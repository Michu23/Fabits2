# !pip install yfinance

import yfinance as yf
import pandas as pd

# Set the symbol of the NSE ETF you want to retrieve data for
etf_symbol = "HDFCNIFETF.NS"

# Define the start and end dates for the historical data
start_date = "2000-01-01"
end_date = "2023-05-14"

# Fetch the historical data for the ETF
etf_data = yf.download(etf_symbol, start=start_date, end=end_date)

# Extract the required data columns
data_columns = ["Open", "Close", "High", "Volume"]
etf_data = etf_data[data_columns]

# Save the data to a CSV file
etf_data.to_csv("etf_data.csv", index=True)

# Print the data
print(etf_data)