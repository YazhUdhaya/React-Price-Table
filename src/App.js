import PricingTable from './table';

function App() {

  const tableData = [
    {
      plan: "FREE",
      price: 0,
      period: "/month",
      currency: "$",
      features: [{
        detail: "Single User",
        isEnable: true,
      },
      {
        detail: "5GB Storage",
        isEnable: true,
      },
      {
        detail: "Unlimited Public Projects",
        isEnable: true,
      },
      {
        detail: "Community Access",
        isEnable: true,
      },
      {
        detail: "Unlimited Private Projects",
        isEnable: false,
      },
      {
        detail: "Dedicated Phone Support",
        isEnable: false,
      },
      {
        detail: "Free Subdomain",
        isEnable: false,
      },
      {
        detail: "Monthly Status Reports",
        isEnable: false,
      }
      ]
    },
    {
      plan: "PLUS",
      price: 9,
      period: "/month",
      currency: "$",
      features: [
        {
          detail: "5 Users",
          isEnable: true,
          isBold: true
        },
        {
          detail: "50GB Storage",
          isEnable: true,
        },
        {
          detail: "Unlimited Public Projects",
          isEnable: true,
        },
        {
          detail: "Community Access",
          isEnable: true,
        },
        {
          detail: "Unlimited Private Projects",
          isEnable: true,
        },
        {
          detail: "Dedicated Phone Support",
          isEnable: true,
        },
        {
          detail: "Free Subdomain",
          isEnable: true,
        },
        {
          detail: "Monthly Status Reports",
          isEnable: false,
        }
      ]
    },
    {
      plan: "PRO",
      price: 49,
      period: "/month",
      currency: "$",
      features: [
        {
          detail: "Unlimited Users",
          isEnable: true,
          isBold: true,
        },
        {
          detail: "150GB Storage",
          isEnable: true,
        },
        {
          detail: "Unlimited Public Projects",
          isEnable: true,
        },
        {
          detail: "Community Access",
          isEnable: true,
        },
        {
          detail: "Unlimited Private Projects",
          isEnable: true,
        },
        {
          detail: "Dedicated Phone Support",
          isEnable: true,
        },
        {
          detail: "Unlimited Free Subdomains",
          isEnable: true,
        },
        {
          detail: "Monthly Status Reports",
          isEnable: true,
        }
      ]
    }
  ]
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            tableData.map((item) => {
              return <PricingTable item={item}></PricingTable>
            })
          }
        </div>
      </div>
    </section>
  );
}

export default App;
