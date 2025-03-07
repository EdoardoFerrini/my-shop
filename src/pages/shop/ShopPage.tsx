import PocketBase from "pocketbase";
export const pb = new PocketBase("http://127.0.0.1:8090");

export function ShopPage() {
  function loadData() {
    pb.collection("products")
      .getList()
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <div>
      <h1 className="title">Shop</h1>

      <button className="btn" onClick={loadData}>
        load data
      </button>
    </div>
  );
}
