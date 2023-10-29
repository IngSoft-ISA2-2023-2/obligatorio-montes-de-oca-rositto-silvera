using System;
using TechTalk.SpecFlow;

namespace SpecFlowPharmacyGo.StepDefinitions
{
    [Binding]
    public class FeatuStepDefinitions
    {
        [Given(@"that I input the description '([^']*)'")]
        public void GivenThatIInputTheDescription(string p0)
        {
            //throw new PendingStepException();
        }

        [Given(@"that I input the price (.*)")]
        public void GivenThatIInputThePrice(Decimal p0)
        {
            //throw new PendingStepException();
        }

        [Then(@"the result '([^']*)'")]
        public void ThenTheResult(string p0)
        {
            //throw new PendingStepException();
        }
    }
}
