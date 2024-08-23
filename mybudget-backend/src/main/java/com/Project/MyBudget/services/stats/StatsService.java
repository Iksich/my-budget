package com.Project.MyBudget.services.stats;

import com.Project.MyBudget.dto.GraphDTO;
import com.Project.MyBudget.dto.StatsDTO;

public interface StatsService {

    GraphDTO getCharData();

    StatsDTO getStats();
}