export function Stats({ items }) {
    const numOfItems = items.length;
    if (numOfItems === 0)
      return (
        <p className="stats">
          <em>Star Listing Your tasks</em>
        </p>
      );
    const totalTaks = items.filter((item) => item.done).length;
    const parcent =
      numOfItems === 0 ? 0 : Math.round((totalTaks / numOfItems) * 100);
  
    return (
      <footer className="stats">
        <em>
          {parcent === 100
            ? "Congrats! You have done All Your Tasks"
            : `You Have ${numOfItems} tasks on Your list , and You have done
          ${totalTaks} (${parcent}%) of yours tasks`}
        </em>
      </footer>
    );
  }
  