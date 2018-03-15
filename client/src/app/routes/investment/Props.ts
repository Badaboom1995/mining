import { RoutingService } from "../../services/routing/routing";
import { InvestmentService } from '../../services/investment/investment';





export interface IInvestmentProps {
	routing? : RoutingService;
	investment? : InvestmentService;
}