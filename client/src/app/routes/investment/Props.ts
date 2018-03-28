import { RoutingService } from "../../services/routing/routing.service";
import { InvestmentService } from '../../services/investment/investment.service';





export interface IInvestmentProps {
	routing? : RoutingService;
	investment? : InvestmentService;
}