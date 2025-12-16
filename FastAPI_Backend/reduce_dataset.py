import pandas as pd
import os

# Load full dataset
dataset_path = os.path.join('..', 'Data', 'dataset.csv')
df = pd.read_csv(dataset_path, compression='gzip')

print(f"Original dataset size: {len(df)} rows")
print(f"Memory usage: {df.memory_usage(deep=True).sum() / 1024**2:.2f} MB")

# Sample 30% of the data to reduce memory
df_sample = df.sample(frac=0.3, random_state=42)

print(f"Reduced dataset size: {len(df_sample)} rows")
print(f"Memory usage: {df_sample.memory_usage(deep=True).sum() / 1024**2:.2f} MB")

# Save reduced dataset
output_path = os.path.join('..', 'Data', 'dataset_reduced.csv')
df_sample.to_csv(output_path, index=False, compression='gzip')
print(f"Saved to {output_path}")
