import "./App.css";
import Counter from "./components/shared/Counter/Counter";
import ItemList from "./components/shared/Items/ItemList";
import Box from "@material-ui/core/Box";
import { lineItems } from "./model/index";
import { Button } from "@material-ui/core";
function App() {
  let sum = 0;
  lineItems.forEach((e) => {
    sum += (e.price - e.discount) * e.quantity;
  });
  return (
    <div className="App">
      <ItemList />
      <Box
        textAlign="right"
        style={{ position: "absolute", bottom: 5, right: 5 }}
      >
        <Counter total={sum} currency={lineItems[0].currency} />
        <Button style={{ background: "red", color: "white" }}>Pay Now</Button>
      </Box>
    </div>
  );
}

export default App;
